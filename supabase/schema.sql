-- ============================================================
-- AMAZONIA REAL · Schema (PT-BR frontend, English DB schema)
-- Project Supabase V3: vtngduopaylggivivtfx
-- Created: 2026-04-26
-- Purpose: structured analysis of Amazon climate science papers,
--          starting with Maracahipes et al. 2026 PNAS (DOI 10.1073/pnas.2532833123)
-- ============================================================

-- 1) Themed groups of analysis (e.g., "Tipping Point", "Edge effects")
CREATE TABLE IF NOT EXISTS amazon_analysis_groups (
    id              SERIAL PRIMARY KEY,
    slug            TEXT NOT NULL UNIQUE,
    title_pt        TEXT NOT NULL,
    summary_pt      TEXT,
    sort_order      INT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 2) Concepts extracted from articles ("nucleações" / "tijolinhos")
CREATE TABLE IF NOT EXISTS amazon_analysis_concepts (
    id                  SERIAL PRIMARY KEY,
    group_id            INT REFERENCES amazon_analysis_groups(id) ON DELETE CASCADE,
    item_number         TEXT NOT NULL,
    exact_quote_pt      TEXT NOT NULL,
    quote_origin        TEXT,
    critical_analysis_pt TEXT NOT NULL,
    partial_conclusion_pt TEXT NOT NULL,
    confidence_level    NUMERIC(3,2) DEFAULT 0.85,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- 3) Source papers (Nature, Science, PNAS, etc) attached to a concept
CREATE TABLE IF NOT EXISTS amazon_analysis_sources (
    id              SERIAL PRIMARY KEY,
    concept_id      INT REFERENCES amazon_analysis_concepts(id) ON DELETE CASCADE,
    journal         TEXT NOT NULL,
    paper_title     TEXT NOT NULL,
    authors         TEXT,
    year            INT,
    doi             TEXT,
    url             TEXT NOT NULL,
    journal_tier    TEXT,
    relation_type   TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 4) Master papers registry (deduplicated, can be referenced by multiple concepts)
CREATE TABLE IF NOT EXISTS amazon_analysis_papers (
    id              SERIAL PRIMARY KEY,
    doi             TEXT UNIQUE,
    title           TEXT NOT NULL,
    authors         TEXT,
    journal         TEXT,
    year            INT,
    url             TEXT,
    key_finding_pt  TEXT,
    journal_tier    TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 5) Public access log (origin IP analytics, no auth)
CREATE TABLE IF NOT EXISTS amazon_access_log (
    id              BIGSERIAL PRIMARY KEY,
    ip_origin       TEXT NOT NULL,
    ip_country      TEXT,
    ip_region       TEXT,
    ip_city         TEXT,
    ip_isp          TEXT,
    user_agent_hash TEXT,
    referrer        TEXT,
    path_accessed   TEXT,
    accessed_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_concepts_group       ON amazon_analysis_concepts(group_id);
CREATE INDEX IF NOT EXISTS idx_sources_concept      ON amazon_analysis_sources(concept_id);
CREATE INDEX IF NOT EXISTS idx_access_origin        ON amazon_access_log(ip_origin);
CREATE INDEX IF NOT EXISTS idx_access_country       ON amazon_access_log(ip_country);
CREATE INDEX IF NOT EXISTS idx_access_at            ON amazon_access_log(accessed_at DESC);

-- Read-only public anon access for the three analysis tables
ALTER TABLE amazon_analysis_groups   ENABLE ROW LEVEL SECURITY;
ALTER TABLE amazon_analysis_concepts ENABLE ROW LEVEL SECURITY;
ALTER TABLE amazon_analysis_sources  ENABLE ROW LEVEL SECURITY;
ALTER TABLE amazon_analysis_papers   ENABLE ROW LEVEL SECURITY;
ALTER TABLE amazon_access_log        ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS p_read_groups   ON amazon_analysis_groups;
DROP POLICY IF EXISTS p_read_concepts ON amazon_analysis_concepts;
DROP POLICY IF EXISTS p_read_sources  ON amazon_analysis_sources;
DROP POLICY IF EXISTS p_read_papers   ON amazon_analysis_papers;
DROP POLICY IF EXISTS p_insert_log    ON amazon_access_log;

CREATE POLICY p_read_groups   ON amazon_analysis_groups   FOR SELECT TO anon USING (true);
CREATE POLICY p_read_concepts ON amazon_analysis_concepts FOR SELECT TO anon USING (true);
CREATE POLICY p_read_sources  ON amazon_analysis_sources  FOR SELECT TO anon USING (true);
CREATE POLICY p_read_papers   ON amazon_analysis_papers   FOR SELECT TO anon USING (true);
CREATE POLICY p_insert_log    ON amazon_access_log        FOR INSERT TO anon WITH CHECK (true);
