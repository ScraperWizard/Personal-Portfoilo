function HeaderText({ text }: { text: string }) {
  return (
    <div className="body-text text-center flex flex-col xl:text-center h-full w-full container mx-auto mb-14">
      <h1 className="h1 text-5xl font-bold mb-4 leading-relaxed select-none text-white top-0">
        {text}
      </h1>
    </div>
  );
}

export default HeaderText;
