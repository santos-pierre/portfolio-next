import GameAggregatorIcon from './icons/GameAggregatorIcon';
import GithubIcon from './icons/GithubIcon';
import LaravelReactSPA from './icons/LaraveReactSPAIcon';
import TicTacToeIcon from './icons/TicTacToeIcon';
import Layout from './Layout';

const MaintenancePage = () => {
    return (
        <Layout title="Santos Pierre | Maintenance">
            <header className="h-screen flex justify-center items-center bg-gray-200">
                <main className="px-4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="inline">Work In Progress </span>
                            <span className="text-indigo-600">...</span>
                        </h1>
                        <div className="mt-5 md:mt-8 lg:flex lg:flex-row lg:justify-center sm:items-center lg:space-y-0 lg:space-x-5 sm:flex-col space-x-3 space-y-0">
                            <a
                                href="https://github.com/santos-pierre/"
                                className="rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            >
                                <button className="flex w-full shadow justify-center items-center px-4 py-4 bg-gray-800 hover:bg-gray-700 space-x-5 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                    <p className="text-lg font-semibold">
                                        <span className="inline-block">My Github</span>
                                    </p>
                                    <GithubIcon className="h-8 w-8" fill="currentColor" />
                                </button>
                            </a>
                            <a href="https://games.santospierre.com">
                                <button className="flex w-full shadow justify-center items-center px-4 py-4 bg-red-600 hover:bg-red-400 space-x-5 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <p className="text-lg font-semibold">
                                        <span className="inline-block">Game Aggregator</span>
                                    </p>
                                    <GameAggregatorIcon
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        className="h-8 w-8 text-white"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </button>
                            </a>

                            <a href="https://laravelreactspa.santospierre.com/">
                                <button className="flex w-full shadow justify-center items-center px-4 py-4 bg-teal-500 hover:bg-teal-400 space-x-5 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                    <p className="text-lg font-semibold">
                                        <span className="inline-block">LaravelReactSPA</span>
                                    </p>
                                    <LaravelReactSPA className="h-8 w-8" />
                                </button>
                            </a>
                            <a href="https://tic-tac-toe.santospierre.com/">
                                <button className="flex w-full shadow justify-center items-center px-4 py-4 bg-indigo-500 hover:bg-indigo-400 space-x-5 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <p className="text-lg font-semibold">
                                        <span className="inline-block">Tic-Tac-Toe</span>
                                    </p>
                                    <TicTacToeIcon className="h-8 w-8" fill="none" stroke="currentColor" />
                                </button>
                            </a>
                        </div>
                    </div>
                </main>
            </header>
        </Layout>
    );
};

export default MaintenancePage;
