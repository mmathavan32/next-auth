const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full items-center flex justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;
