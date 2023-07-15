const Form = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex flex-col w-96 gap-8">{children}</section>;
};

export default Form;
