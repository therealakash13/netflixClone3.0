export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen p-4 text-text space-y-8 pt-20">
        {/* About Me Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIo0mt_RvFUyeuzHMWuBqNSHJ1iVMNkoWSDvK0e4orvOSyAk5w=s360-c-no"
            alt="Developer Avatar"
            className="w-24 h-24 rounded-full border-2 border-accent shadow-md"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-accent">
            About Me
          </h1>
          <p className="text-base sm:text-lg font-medium max-w-3xl px-4 sm:px-8 text-text">
            Hello! I'm a passionate front-end developer with a love for creating
            beautiful, accessible, and functional UIs. My journey began with
            HTML/CSS, and I've since expanded into modern tools and frameworks.
          </p>
        </div>

        {/* About Project Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-accent">
            About Project
          </h1>
          <p className="text-base sm:text-lg font-medium max-w-3xl px-4 sm:px-8 text-text">
            NiggaFlix is a web app for discovering movies, trailers,
            featurettes, and more. It pulls movie/TV info from TMDB and presents
            it with a sleek, responsive design.
          </p>
          <p className="text-base sm:text-lg font-medium max-w-3xl px-4 sm:px-8">
            Built using TMDB API, styled with Tailwind CSS, and supported by
            ChatGPT for development suggestions.
          </p>
        </div>

        {/* Project Note */}
        <p className="text-base sm:text-lg font-medium text-center px-4 sm:px-8 max-w-3xl mx-auto text-text">
          This is a simple web app with TMDB integration. The watch page was
          inspired by YouTube's layout — whether I nailed it or not, it is what
          it is 😄.
        </p>

        {/* Connect Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-accent">
            Connect
          </h1>
          <ul className="flex flex-row justify-center items-center space-x-6 sm:space-x-10">
            <li>
              <a
                href="https://www.linkedin.com/in/akashkumar0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  className="w-10 h-10 hover:scale-110 transition"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/therealakash13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-10 h-10 hover:scale-110 transition"
                />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/therealakash13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/twitter.svg"
                  alt="Twitter/X"
                  className="w-10 h-10 hover:scale-110 transition"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
