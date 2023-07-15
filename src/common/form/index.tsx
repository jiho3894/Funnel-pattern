const Form = ({ children }: { children: React.ReactNode }) => {
  return <form className="flex flex-col w-96 gap-8">{children}</form>;
};

export default Form;
