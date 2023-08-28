import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebaseApp from '../../firebase'; // Assuming this exports the initialized app

const auth = getAuth(firebaseApp);

const SignInGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return { success: true, user: result.user };
    } catch (error) {
        console.error('Error during Google sign-in:', error.message);
        return { success: false, message: error.message };
    }
}

export default SignInGoogle;
