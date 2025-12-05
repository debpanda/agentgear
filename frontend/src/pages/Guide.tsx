import { Layout } from "../components/Layout";

export const GuidePage = () => {
    return (
        <Layout>
            <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Documentation & Guide</h1>
                    <p className="mt-2 text-lg text-slate-600">
                        Welcome to AgentGear! Learn how to integrate LLM observability into your application.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Quick Start Section */}
                    <section className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        <h2 className="mb-4 text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Quick Integration</h2>
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-slate-600 mb-4">
                                Install the Python SDK and configure it with your project API key.
                            </p>
                            <div className="space-y-4">
                                <div className="rounded-lg bg-slate-900 p-4">
                                    <code className="text-sm text-green-400">pip install agentgear-ai</code>
                                </div>
                                <div className="rounded-lg bg-slate-900 p-4">
                                    <pre className="text-sm text-slate-300 overflow-x-auto">
                                        {`from agentgear import AgentGearClient, observe

client = AgentGearClient(
    base_url="http://localhost:8000",
    project_id="<your_project_id>",
    api_key="<your_token>"
)

@observe(client)
def my_llm_function(input_text):
    # Your LLM call here
    return "response"
`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Concepts Section */}
                    <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <h2 className="mb-4 text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Concepts</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <h3 className="font-semibold text-slate-900">Projects</h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Isolate your metrics and traces by application or team. Each project has its own API keys.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                </div>
                                <h3 className="font-semibold text-slate-900">Prompts</h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Manage and version your prompts centrally. Update prompt text without redeploying code.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="font-semibold text-slate-900">Runs & Spans</h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Trace execution flow through your agent. Capture latency, token usage, and errors at every step.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};
