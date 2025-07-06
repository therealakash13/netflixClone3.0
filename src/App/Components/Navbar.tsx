export default function Navbar() {
  return (
    <>
    <nav className="font-semibold bg-[#36454F] rounded-b-lg text-white">
  <div className="flex flex-row">
    <div className="flex justify-center">
      <img
        width="110"
        className="mt-3 mb-3 mr-3 m-5 cursor-pointer"
        src="../../../assets/logo.png"
        alt=""
        routerLink="/home"
      />
    </div>
    <div className="flex flex-row justify-between items-center ml-1 mr-1 w-full">
      <div className="sm:ml-2 lg:ml-5">
        <ul className="ml-3 flex flex-row sm:space-x-4 lg:space-x-12">
          <li className="cursor-pointer hover:scale-110 hover:text-black">
            <a
              routerLink="/movies"
              routerLinkActive="font-bold  text-black"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              Movies
            </a>
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-black">
            <a
              routerLink="/tvshows"
              routerLinkActive="font-bold  text-black"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              Tv Shows
            </a>
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-black">
            <a
              routerLink="/nowplaying"
              routerLinkActive="font-bold text-black"
              [routerLinkActiveOptions]="{ exact: true }"
              >Now Playing</a
            >
          </li>

          <li className="cursor-pointer hover:scale-110 hover:text-black">
            <a
              routerLink="/popular"
              routerLinkActive="font-bold text-black"
              [routerLinkActiveOptions]="{ exact: true }"
              >Popular</a
            >
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-black">
            <a
              routerLink="/upcoming"
              routerLinkActive="font-bold text-black"
              [routerLinkActiveOptions]="{ exact: true }"
              >Upcoming Movies</a
            >
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-black">
            <a
              routerLink="/about"
              routerLinkActive="font-bold text-black"
              [routerLinkActiveOptions]="{ exact: true }"
              >About</a
            >
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="relative flex justify-center p-4 text-black">
            <input
              type="text"
              [(ngModel)]="searchTerm"
              placeholder="Search..."
              className="w-full max-w-lg px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              (input)="onSearchChange()"
              (focus)="onSearchChange()"
            />
            <ul
              *ngIf="isDropdownVisible"
              className="absolute top-full mt-1 w-full max-w-lg bg-gray-700 border rounded-xl z-10 max-h-96 overflow-y-auto"
            >
              <li
                *ngFor="let item of searchResults"
                className="p-2 hover:bg-gray-100 cursor-pointer"
                (click)="selectResult(item)"
              >
                <div className="flex flex-row items-center space-x-2">
                  <img
                    className="w-14"
                    [src]="'https://image.tmdb.org/t/p/w500' + item.poster_path"
                    alt=""
                  />
                  <span>{{ item.name || item.title }}</span>
                </div>
              </li>
            </ul>
          </div>

          <span className="inline-block px-4 py-2 text-lg font-bold"
            >{{ userName }}
          </span>

          <img
            width="42"
            className="rounded-full mt-1 mb-1"
            src="{{ userProfilePhoto }}"
            alt=""
          />
        </div>
        &nbsp; |
        <button
          (click)="signOut()"
          className="lg:px-4 sm:px-2 hover:text-[#E50914]"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
