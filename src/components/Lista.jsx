import Item from "./Item";

function Lista() {
    return (
      <div>
        <h1>TechNova Solutions (Tecnologia):</h1>
        <ul>
          <Item nome="Microsoft Office" categoria="Software" preco="R$200" avaliacao="4.5/5" disponibilidade="Em estoque" anoLancamento='2022' />
          <Item nome="Dell XPsS 13" categoria="Hardware" preco="R$5000" avaliacao="4.8/5" disponibilidade="Poucas unidades" anoLancamento='2022' />
          <Item nome="Serviço de Cloud AWS" categoria="Serviço" preco="R$100" avaliacao="4.2/5" disponibilidade="Disponível" anoLancamento='2022'/>
          <Item nome="Teclado Logitech MX Keys" categoria="Acessórios" preco="R$500" avaliacao="4.0/5" disponibilidade="Em estoque" anoLancamento='2022'/>
          <Item nome="Consultoria em TI" categoria="Consultoria" preco="R$3000" avaliacao="4.7/5" disponibilidade="Disponível" anoLancamento='2022'/>
          <Item nome="Adobe Photoshop" categoria="Software" preco="R$250" avaliacao="4.6/5" disponibilidade="Em estoque" anoLancamento='2023'/>
          <Item nome="MacBook Pro" categoria="Hardware" preco="R$12000" avaliacao="4.9/5" disponibilidade="Poucas unidades" anoLancamento='2023'/>
          <Item nome="Serviço de Suporte Técnico" categoria="Serviço" preco="R$120" avaliacao="4.3/5" disponibilidade="Disponível" anoLancamento='2023'/>
          <Item nome="Mouse Logitech MX Master 3" categoria="Acessórios" preco="R$700" avaliacao="4.1/5" disponibilidade="Em estoque" anoLancamento='2023'/>
          <Item nome="Consultoria em Segurança Cibernética" categoria="Consultoria" preco="R$3500" avaliacao="4.8/5" disponibilidade="Disponível" anoLancamento='2023'/>
          <Item nome="Microsoft Visual Studio" categoria="Software" preco="R$300" avaliacao="4.7/5" disponibilidade="Em estoque" anoLancamento='2023'/>
          <Item nome="Monitor LG UltraFine" categoria="Hardware" preco="R$7000" avaliacao="5.0/5" disponibilidade="Poucas unidades" anoLancamento='2023'/>
          <Item nome="Serviço de Backup em Nuvem" categoria="Serviço" preco="R$150" avaliacao="4.4/5" disponibilidade="Disponível" anoLancamento='2023'/>
          <Item nome="Fone de Ouvido Sony WH-1000XM4" categoria="Acessórios" preco="R$2000" avaliacao="4.2/5" disponibilidade="Em estoque" anoLancamento='2023'/>
          <Item nome="Consultoria em Transformação Digital" categoria="Consultoria" preco="R$4000" avaliacao="4.9/5" disponibilidade="Disponível" anoLancamento='2023'/>
        </ul>
      </div>
    );
  }
export default Lista