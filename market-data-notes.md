# Market Data Notes (Updated 2026-02-11)

Source: [City of Philadelphia OPA property sales open data](https://phl.carto.com/api/v2/sql?q=SELECT%20sale_price,sale_date%20FROM%20opa_properties_public)

All queries filter for `sale_date >= '2025-12-01'` and `sale_price > 1000` to remove nominal transfers.

## Key pulls

| Metric | Query | Result |
| --- | --- | --- |
| Median sale price | `SELECT percentile_disc(0.5) ...` | $250,000 |
| Average sale price | same query | $473,507 |
| Closed sales | same query | 1,105 |
| Price tier mix | `SELECT SUM(CASE...)` | 38.10% <$200K · 44.43% $200–499K · 17.47% $500K+ |
| Avg price per tier | `SELECT avg(...) FILTER` | $105,310 entry · $310,608 mid · $1,691,095 upper |
| Housing stock breakdown | `SELECT building_code_description_new ... LIMIT 5` | Row typical (242), Row porch front (240), Row post war (138) dominate |

Use these numbers anywhere the site references "Market Pulse" stats.
