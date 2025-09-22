describe('Teste do Login', () => {
  it('Deve entrar na conta do usuario', () => {
    // Visita a página de login
    cy.visit('http://localhost/synapse-site/login.php');

    // coloca os dados
    cy.get('input[name="email"]').type('eusouerick@exemplo.com');
    cy.get('input[name="senha"]').type('vaisefudebahia');

    // Clica no botao
    cy.get('.login-buttonlogin').click();

    // garantia que deu certo
    cy.url().should('include', '/homelogv2.php');
  });

  it('Nao deveria entrar na conta por conta de credenciais incorretas', () => {

    cy.visit('http://localhost/synapse-site/login.php');

    cy.get('input[name="email"]').type('eusouerick@exemplo.com');
    cy.get('input[name="senha"]').type('senhaincorreta');  

    cy.get('.login-buttonlogin').click();

    // procura pela pagina a mensagem de senha pra garantir que nao fez login
    cy.contains('Senha incorreta', {matchCase:false}).should('be.visible');

  })

  it('nao deveria entrar na conta devido a credenciais em branco', () => {

    cy.visit('http://localhost/synapse-site/login.php');

    cy.get('input[name="email"]').type('eusouerick@exemplo.com');

    cy.get('.login-buttonlogin').click();

    // procura pela pagina a mensagem de senha pra garantir que nao fez login
    cy.contains('Senha incorreta',{matchCase:false}).should('be.visible');

  })
});

describe('Teste do acesso de artigos e noticias',() => {

  it('Abre um artigo ', () => {
    
    //funcao criada no arquivo command.js no folder support, faz os passos de login sem precisar ficar repetindo toda vez
    cy.login() 

    //visita a pagina pq apos a funcao terminar ela limpa os cookie e te deixa numa pagina branca, quebrando o resto
    cy.visit('http://localhost/synapse-site/homelogv2.php')

    cy.get('.cta-button').contains('Ver sobre').click()
    cy.get('.card-content').contains('Clozapina é mais efetiva que outros antipsicóticos - UFMG', {matchCase:false}).click()
  })

});

describe('Teste do Questionario', () => {

  it('Responde o Questionario com bias de concordancia', () => {
   
    cy.login()
    cy.visit('http://localhost/synapse-site/homelogv2.php')

    cy.get('.cta-button').contains("Questionário").click()
    
    // responde todas as perguntas com concordo totalmente
    cy.get('input[value="4"]').click({ multiple: true })

    cy.get('button[type="submit"]').click()
    cy.contains('seu estado', {matchCase:false}).should('be.visible')

  });

});