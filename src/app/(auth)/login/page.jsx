import { handleGithubLogin } from '@/lib/action';
import styles from './login.module.css'
import LoginForm from '@/components/loginForm/LoginForm';

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>
      </div>
      <LoginForm></LoginForm>
    </div>
  )
}

export default LoginPage
