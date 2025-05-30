
import Navigation from '@/components/Navigation';
import AuthForms from '@/components/AuthForms';

const Login = () => {
  return (
    <div>
      <Navigation />
      <AuthForms defaultTab="login" />
    </div>
  );
};

export default Login;
