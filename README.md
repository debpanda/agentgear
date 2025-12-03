# AgentGear

AgentGear is an open-source, cloud-ready platform for LLM observability, prompt management, and agentic workflow tracing. It combines a Python SDK, FastAPI backend, React dashboard, and Typer CLI to give teams visibility into prompts, runs, spans, costs, and performance across modern agent frameworks.

## Features
- Python SDK for prompt rendering, tracing, and OpenAI/agent framework hooks
- FastAPI backend with project-scoped API tokens, runs, spans, prompts, and metrics
- React + Vite + Tailwind dashboard for projects, runs, tokens, and prompt versions
- Typer CLI for bootstrapping, seeding demo data, and launching the local UI
- Pluggable storage: SQLite for local dev, Postgres for cloud deployments

## Getting Started
### Prerequisites
- Python 3.10+
- Node 18+ and pnpm/npm/yarn

### Install SDK
```bash
pip install agentgear
```

### Run Backend (dev)
```bash
uvicorn agentgear.server.app.main:app --reload
```

### Run Frontend (dev)
```bash
cd frontend
npm install
npm run dev
```

### CLI
```bash
agentgear --help
agentgear init-db
agentgear create-project
agentgear create-token --project <id>
agentgear ui
```

## Architecture
- **SDK**: decorators and context managers for run/span capture, prompt templating, and provider hooks.
- **Backend**: FastAPI with token auth middleware; projects, prompts, runs, spans, metrics APIs; SQLite/Postgres via SQLAlchemy.
- **Frontend**: React dashboard for projects, prompts, runs, spans, and token management.
- **CLI**: Typer commands to initialize databases, manage projects/tokens, seed demo data, and run the UI.

## Contributing
See `CONTRIBUTING.md` for setup, coding standards, and review expectations.

## License
Apache License 2.0. See `LICENSE` for details.
