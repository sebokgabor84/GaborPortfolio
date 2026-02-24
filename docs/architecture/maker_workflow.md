# The Maker Extension Workflow 🛠️

This document visualizes the lifecycle of a task within the GaborPortfolio agentic framework, specifically tracing the path of a "Maker" request.

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
    UserIntent(User: 'Add Hexagonal Wedding Gate'):::trigger
    
    subgraph "Routing System"
        Router(router.rules.md):::role
        Maker(maker_craftsman.rules.md):::role
        QA(qa_specialist.rules.md):::role
    end

    subgraph "Capability Layer"
        Interview(artisan_interview.skill.md):::skill
        AssetCheck(asset_validator.skill.md):::skill
    end

    subgraph "Contract Layer [The Contract 📜]"
        DataStruct(Project Data Object):::file
        ZodSchema("ProjectDTOSchema<br/>src/data/types.ts"):::dto
    end

    subgraph "Execution Engine [The Hammer 🔨]"
        Hammer(the_hammer.md):::cmd
        Lint(npm run lint):::cmd
        TypeCheck(npm run typecheck):::cmd
        Test(npm run test):::cmd
        DoD("Definition of Done<br/>16/16 Green"):::cmd
    end

    %% Flow
    UserIntent --> Router
    Router -- "Keyword: 'make', 'create'" --> Maker
    Router -- "Keyword: 'test', 'verify'" --> QA
    
    Maker --> Interview
    Interview -- "Gather Description, Tags, Images" --> DataStruct
    
    DataStruct --> ZodSchema
    ZodSchema -- "Validates JSON" --> Hammer
    ZodSchema -. "Fail: Invalid Kebab-Case ID" .-> Interview
    
    Hammer --> Lint
    Hammer --> AssetCheck
    Hammer --> TypeCheck
    Hammer --> Test
    
    AssetCheck -- "Verify /assets/thumb-id.webp" --> DoD
    Lint --> DoD
    TypeCheck --> DoD
    Test --> DoD
    
    DoD -- "Success" --> Deploy((Deployment))
```

## Extensibility Points 🔌

This architecture allows for "Visual Vibe Coding" by extending nodes without rewriting the core logic.

### 1. Adding a New Persona
- **Where**: Create `.agent/rules/new_persona.rules.md`.
- **Link**: Update `router.rules.md` to map new keywords to this file.
- **Visual**: Add a new Blue (`:::role`) node in the Routing System subgraph.

### 2. Adding a New Capability (Skill)
- **Where**: Create `.agent/skills/new_capability.skill.md`.
- **Link**: Reference this skill in the relevant Rules file.
- **Visual**: Add a new Green (`:::skill`) node in the Capability Layer.

### 3. Modifying "The Contract"
- **Where**: Edit `ProjectDTOSchema` in `src/data/types.ts`.
- **Example**: To add a `budget` field for projects, update the Zod object.
- **Visual**: The Yellow (`:::dto`) node represents a gatekeeper. Any data structure changes here automatically update validation logic downstream.

### 4. Strengthening "The Hammer"
- **Where**: Edit `.agent/commands/the_hammer.md` or the underlying scripts.
- **Example**: Add a security audit step.
- **Visual**: Add a new Red (`:::cmd`) node in the Execution Engine subgraph, feeding into the Definition of Done.
