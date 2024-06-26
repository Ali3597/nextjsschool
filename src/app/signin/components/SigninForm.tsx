/* eslint-disable react/no-unescaped-entities */
"use client";


import { signIn } from "next-auth/react";



const SigninForm = ({error}:{error:string | undefined}) => {
 


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await signIn("credentials",{
      email:  formData.get("email"),
      password: formData.get("password"),
      redirect:true,
      callbackUrl: "/movies"
    })

  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Connexion
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}  >
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div>
      
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  {error && <p className="text-red-700">Credits Invalides</p>}
  
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Se connecter</button>
           

              </form>
          </div>
      </div>
  </div>
</div>
  );
};

export default SigninForm;