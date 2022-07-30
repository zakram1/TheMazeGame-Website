import GithubLogo from './images/github.png';

function Footer () {
  return (
    <footer class="flex flex-row p-4 bg-[#F5DADF] fixed left-0 bottom-0 right-0 gap-1 justify-between items-center shadow dark:bg-gray-800 font-bold">
        <span class="text-sm sm:text-center dark:text-gray-400">TheMazeGame Leaderboard</span>
        <img src={GithubLogo} alt="Github Logo" class="w-4 h-4 ml-auto"/>
        <span class="text-sm sm:text-center dark:text-gray-400 hover:underline"><a href="https://github.com/zakram1" target="_blank" rel="noopener noreferrer">Github</a></span>
    </footer>
  )
}

export default Footer;