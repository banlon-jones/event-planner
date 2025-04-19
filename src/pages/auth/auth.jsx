import {TabPanel, TabView} from "primereact/tabview";
import {SignInAndSignUp} from "../../components/signInAndSignUp/signInAndSignUp.jsx";

export const AuthPage = () => {
  return (
    <>
      <div className="rounded-lg bg-white shadow-lg p-8 max-w-md mx-auto flex flex-col justify-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
          <p className="text-gray-600 text-center mb-6">Please sign in to continue</p>
        </div>
        <div>
          <TabView>
            <TabPanel header="Sign In">
              <div>
                <SignInAndSignUp type={'login'} buttonLabel={'Sign in'} textLabel={'Don\'t have an account?'} />
              </div>
            </TabPanel>
            <TabPanel header="Sign Up">
              <div>
                <SignInAndSignUp type={'signup'} buttonLabel={'Sign up'} textLabel={'Already have an account?'} />
              </div>
            </TabPanel>

          </TabView>
        </div>
      </div>
    </>
  );
}
