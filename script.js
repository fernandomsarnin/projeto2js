 
        function mostrarPagina(pagina) {

          const secao = document.getElementById('conteudo');


          let conteudo = '';


          switch (pagina) {


              case 'inicio':


                  conteudo = `

                      <h2>Início</h2>
                      

                      <p>Bem-vindo ao meu currículo profissional. Atualmente faço o curso de Desenvolvimento e Análise de Sistema na Universidade Uninter com foco em desenvolvimento web front end.</p>
                      

                      <p>Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.</p>
                      
                  `;
                  break;

              case 'experiencia':


                  conteudo = `
                      <h2>Experiência Profissional</h2>
                      

                      <h3>Desenvolvedora Web Front End</h3>


                      <p>Projetos Autônomos até o presente</p>
                      

                      <ul>
                          

                          <li>Desenvolvimento de conteúdo web utilizando tecnologias como HTML, CSS, JavaScript, Node.js.</li>
                          

                          <li>Tratamento de Dados com Python, SQL, EXCEL e POWER BI.</li>

                          <li>Colaboração em equipe para o desenvolvimento de novos recursos e funcionalidades.</li>
                          

                          <li>Participação em reuniões de planejamento e revisão de código.</li>
                          
                      </ul>
                  `;

                 break;

              case 'educacao':

                conteudo = `

                      <h2>Educação</h2>
                      

                      <h3>Cursando Bacharelado em Desenvolvimento e Análise de Sistemas</h3>
                      

                      <p>Universidade UNINTER - Cursando</p>
              
                      <ul>
              
                          <li>Principais disciplinas: Programação, Algoritmos e Estrutura de Dados, Banco de Dados, Redes de Computadores.</li>
              

                          <li>Participação em projetos de pesquisa e extensão relacionados à área de desenvolvimento de software.</li>
                          
                      </ul>
                  `;

                  
                  break;

              
              case 'habilidades':

                conteudo = `

                      

                      <h2>Habilidades</h2>
              
                      <ul>
              
                          <li>HTML5, CSS3, JavaScript</li>
              

                          <li>Node.js</li>
              

                          <li>Power BI, Excel</li>
              

                          <li>SQL Sever</li>
              

                          <li>Git, GitHub</li>
              

                          <li>Python</li>
              
                      </ul>
                    
                    <div class='paragrafoHabilidade'>  
                    <p class='paragrafoHabilidade2'>
                    Tenho um conhecimento sólido em HTML, CSS e JavaScript, e estou continuamente aprimorando minhas habilidades através de pequenos projetos práticos. Esta página simples é um exemplo do meu progresso nos estudos dessas tecnologias, que têm sido o foco principal no meu desenvolvimento. Além disso, estou me aprofundando em ferramentas essenciais para análise de dados, como SQL, Python, Excel e Power BI, ampliando meu leque de competências e buscando sempre novas formas de integrar essas habilidades no meu dia a dia.
                     </p>

                     <p class='paragrafoHabilidade2'>
                    Estou em busca de uma oportunidade que me permita colocar em prática todo o conhecimento adquirido e continuar aprendendo. Quero contribuir de forma significativa para a empresa que me der a chance de ingressar no mercado de TI, onde poderei crescer profissionalmente e, ao mesmo tempo, agregar valor com minhas habilidades em constante evolução."

Esse parágrafo reforça sua vontade de contribuir e crescer, enquanto demonstra disposição para aprender e se desenvolver no ambiente de trabalho.
                     </p>
                    </div>
                  `;

              
                  break;

              
              default:

              
                  conteudo = '<h2>Página não encontrada</h2><p>A página solicitada não existe.</p>';

              
                  break;

          }

          secao.innerHTML = conteudo;
      }
  
      
      mostrarPagina('inicio');
      
 mostrarPagina('inicio');