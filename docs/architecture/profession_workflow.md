# The Profession Workflow 🛡️

This document visualizes the lifecycle of a task within the GaborPortfolio agentic framework, specifically tracing the path of a "Profession" (QA / Engineering) request.

## Architecture Visualization

```mermaid
flowchart TD
    %% Styling Definitions
    classDef role fill:#3498db,stroke:#2980b9,stroke-width:2px,color:white
    classDef skill fill:#2ecc71,stroke:#27ae60,stroke-width:2px,color:white
    classDef cmd fill:#e74c3c,stroke:#c0392b,stroke-width:2px,color:white
    classDef dto fill:#f1c40f,stroke:#f39c12,stroke-width:2px,color:black
    classDef file fill:#95a5a6,stroke:#7f8c8d,stroke-width:2px,color:white
    classDef trigger fill:#8e44ad,stroke:#8e44ad,stroke-width:2px,color:white

    %% Nodes
    UserIntent(User: 'Verify Component Accessibility'):::trigger
    
    subgraph "Routing System"
        Router(router.rules.md):::role
        QA(qa_specialist.rules.md):::role
        SEO(seo_expert.rules.md):::role
    end

    subgraph "Capability Layer"
        SEOAudit(seo_auditor.skill.md):::skill
        AssetCheck(asset_validator.skill.md):::skill
    end

    subgraph "Contract Layer [The Contract 📜]"
        DataStruct(SEO / Component Data Object):::file
        ZodSchema("SEOMetadataSchema<br/>src/data/types.ts"):::dto
    end

    subgraph "Execution Engine [The Hammer 🔨]"
        Hammer(the_hammer.md):::cmd
        Lint(npm run lint):::cmd
        Unit(npm test -- --run):::cmd
        E2E(npm run test:e2e):::cmd
        DoD("Definition of Done<br/>16/16 Green / 0 Errors"):::cmd
    end

    %% Flow
    UserIntent --> Router
    Router -- "Keyword: 'test', 'accessibility', 'logic'" --> QA
    Router -- "Keyword: 'SEO', 'metadata'" --> SEO
    
    QA --> SEOAudit
    QA --> AssetCheck
    SEO --> SEOAudit
    
    SEOAudit -- "Gather Tags, Titles, Structure" --> DataStruct
    
    DataStruct --> ZodSchema
    ZodSchema -- "Validates JSON/Data" --> Hammer
    ZodSchema -. "Fail: Invalid Metadata / Missing Alts" .-> SEOAudit
    
    Hammer --> Lint
    Hammer --> Unit
    Hammer --> E2E
    
    Lint --> DoD
    Unit --> DoD
    E2E --> DoD
    AssetCheck -- "Verify assets" --> DoD
    
    DoD -- "Success" --> Deploy((Deployment))
```

## Extensibility Points 🔌

This architecture allows for "Visual Vibe Coding" by extending nodes without rewriting the core logic, enforcing strict QA standards across the portfolio.

### 1. Augmenting the QA Persona
- **Where**: Modify `.agent/rules/qa_specialist.rules.md`.
- **Example**: Add accessibility standard checks (e.g., forcing axe-core compliance).
- **Visual**: Enhances the Blue (`:::role`) node's mandate, dictating stricter routing or new capability requirements.

### 2. Adding a New Test Capability (Skill)
- **Where**: Create `.agent/skills/performance_auditor.skill.md`.
- **Link**: Reference this new auditor in `qa_specialist.rules.md` or `seo_expert.rules.md`.
- **Visual**: Add a new Green (`:::skill`) node in the Capability Layer.

### 3. Modifying "The Contract" for Components
- **Where**: Edit schemas in `src/data/types.ts` (like `SEOMetadataSchema`).
- **Example**: Enforce a new rule where all components must have a strictly typed `aria-label`.
- **Visual**: The Yellow (`:::dto`) node acts as the unbreakable gatekeeper protecting The Hammer from malformed test assertions.

### 4. Strengthening "The Hammer"
- **Where**: Edit `.agent/commands/the_hammer.md` or scripts in `package.json`.
- **Example**: Add Playwright UI snapshot testing or a CI integration step.
- **Visual**: Add a new Red (`:::cmd`) node in the Execution Engine subgraph before the "Definition of Done".
