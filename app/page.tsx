export default function WorkshopPage() {
  return (
    <div className="flex flex-col items-center text-gray-800">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-yellow-100 to-yellow-300 py-20 text-center">
        <img src="https://i.postimg.cc/VsxB3D2q/LOGOTIPO.png" alt="Logo Julie Anie" className="w-32 mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold text-yellow-700 mb-6">O jogo está zerando.</h1>
        <p className="max-w-2xl mx-auto text-lg">
          A Reforma Tributária e a inteligência artificial estão redesenhando a área fiscal.
          <br />O que você sabia até ontem... hoje já não é mais suficiente.
          <br />
          Esta é a sua oportunidade.
        </p>
        <a
          href="https://pay.hotmart.com/C99176579W?checkoutMode=2"
          className="mt-10 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
        >
          Quero me Inscrever
        </a>
      </section>

      {/* Workshop Description */}
      <section className="w-full py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Workshop Alteryx na Prática</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Mais de 16 horas de conteúdo real, extraído de workshops ao vivo, focados na prática e na transformação.
        </p>
      </section>

      {/* O que você vai viver */}
      <section className="w-full py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">O que você vai viver:</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-lg">
          <li>
            <strong>Primeiros passos no Alteryx:</strong> Você cria seu primeiro fluxo funcional.
          </li>
          <li>
            <strong>Destravamento técnico e estratégico:</strong> Você automatiza processos reais.
          </li>
          <li>
            <strong>Visão de futuro:</strong> Você entende como se posicionar na nova era fiscal.
          </li>
        </ul>
      </section>

      {/* Identificação */}
      <section className="w-full py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">Você se identifica?</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-lg">
          <li>Horas travado em planilhas de Excel?</li>
          <li>Tempo sendo subutilizado?</li>
          <li>Percepção de que a tecnologia é inevitável?</li>
        </ul>
        <p className="text-center text-yellow-600 text-xl font-semibold mt-8">Então você está no lugar certo. ✨</p>
      </section>

      {/* Linha do Tempo */}
      <section className="w-full py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Linha do Tempo da Sua Transformação</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-lg">
          <li>
            <strong>Hoje:</strong> Processos manuais.
          </li>
          <li>
            <strong>1 Semana:</strong> Entendimento da automação.
          </li>
          <li>
            <strong>1 Mês:</strong> Construção de fluxos próprios.
          </li>
          <li>
            <strong>3 Meses:</strong> Referência no time.
          </li>
        </ul>
      </section>

      {/* Benefícios */}
      <section className="w-full py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">O que você recebe:</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-lg text-left">
          <li>✅ Acesso a mais de 16h de conteúdo gravado</li>
          <li>✅ Certificado de participação</li>
          <li>✅ Materiais de apoio práticos</li>
          <li>✅ Grupo oficial no WhatsApp</li>
          <li>✅ Método aplicado em multinacionais</li>
        </ul>
        <p className="text-xl text-gray-800 mt-10">
          Investimento: <strong>R$ 497,00</strong> ou <strong>12x no cartão</strong>
        </p>
      </section>

      {/* Sobre Julie */}
      <section className="w-full py-20 bg-yellow-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Quem é Julie Anie</h2>
        <img
          src="https://i.postimg.cc/4ynm5cJB/Design-sem-nome-3.png"
          alt="Foto de Julie Anie"
          className="w-40 h-40 rounded-full border-4 border-yellow-400 mx-auto mb-6"
        />
        <p className="max-w-3xl mx-auto text-lg">
          Especialista em Tax Tech, automação tributária e transformação de carreiras. <br />
          Fundadora da Tax In — formadora de profissionais tributários do futuro.
        </p>
      </section>

      {/* Depoimentos */}
      <section className="w-full py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Depoimentos de quem já participou</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="border p-6 rounded-lg shadow-md">
            Samylla Silva: "Eu participei do primeiro workshop. Foi uma manhã de muitas trocas e aprendizado."
          </div>
          <div className="border p-6 rounded-lg shadow-md">
            Maria Ines Gonçalves: "Super recomendo, didática excelente e expertise!"
          </div>
          <div className="border p-6 rounded-lg shadow-md">
            Ewerton Rodrigues: "Diversidade de temas, network e cases reais."
          </div>
          <div className="border p-6 rounded-lg shadow-md">
            Lourraine Calegari: "Didática excelente e apoio direto nos grupos."
          </div>
          <div className="border p-6 rounded-lg shadow-md">Taís Blanco: "Dinâmico, didático e muito enriquecedor!"</div>
          <div className="border p-6 rounded-lg shadow-md">Francinele Lima: "Vale muito o investimento!"</div>
        </div>
      </section>

      {/* Garantia */}
      <section className="w-full py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Garantia de Transformacão</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Se após 7 dias você sentir que o Workshop não é para você, basta solicitar reembolso. Mas se colocar em
          prática, será impossível não ver mudanças!
        </p>
      </section>

      {/* Fechamento */}
      <section className="w-full py-20 bg-yellow-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Sua nova jornada começa agora</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          O mercado tributário mudou. Quem muda agora, lidera. Escolha ser parte do futuro!
        </p>
        <a
          href="https://pay.hotmart.com/C99176579W?checkoutMode=2"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
        >
          Garantir Minha Vaga
        </a>
      </section>

      <footer className="w-full text-center text-gray-500 text-sm my-8">
        © 2025 Julie Anie | Workshop Alteryx na Prática | Todos os direitos reservados
      </footer>
    </div>
  )
}
