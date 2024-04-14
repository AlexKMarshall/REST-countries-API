

function CountriesSearchField() {

    return (
            <form>
                <div className="bg-white flex items-center shadow-lg my-10 mx-6 rounded-md overflow-hidden">
                    <svg className="w-6 opacity-50 mx-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input className="w-full p-2 py-4 text-lg placeholder:opacity-70 hover:bg-gray-100 focus:outline-none transition-colors" type="search" placeholder="Search for a country" />
                </div>
            </form>
    );
}

export default CountriesSearchField