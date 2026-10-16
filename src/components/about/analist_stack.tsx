const AnalistStack = () => {
  return (
    <div className="flex flex-row gap-4 w-full mt-10">
      <div className="flex items-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_neurokit.webp" alt="Logo do NeuroKit" width={450} height={116} loading="lazy" decoding="async" className="h-[130px] w-auto" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_graph_theory.webp" alt="Ícone de Teoria dos Grafos" width={450} height={450} loading="lazy" decoding="async" className="h-[130px] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default AnalistStack;
