import StyleCard from "../components/StyleCard"
import useUserStore from '../store/user_store'

const Home = () => {
  let user_id = useUserStore((state) => state.user_id)
  console.log("From index comp (user_id): ", user_id)
  
  return (
      <main className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <StyleCard name="Get On Board"  
                  desc="Sign-in or up and get to creating"
                  linkPath="/auth"
                  linkText="Get Started"/>
      </main>


  );
};

export default Home;
