export default class Language {
    
    static Lang = {
        English: "en",
    }

    static text = {
        en: {
            "Login": 
                "Login",

            "Register": 
                "Register",

            "RegisterFormText":
                "Create an account",
            
            "LoginFormText":
                "Login",
            
            "LoginSuccess":
                "You have successfully logged in!",
            
            "LoginError":
                "Credentials invalid or account does not exist!",
        }
    }

    static get(field)
    {
        return this.text[this.Lang.English][field];
    }
}