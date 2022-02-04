# OOP Tips

- Um constructor privado (ou classes abstratas) não permite a instanciação da classe com "new ClassName()", mas se a ele for adicionado um método estático (e público), esse método pode ser acessado diretamente a partir da classe (Factory pattern)
- Métodos e propriedades private não ficam disponíveis fora da classe. Ninguém consegue acessar com "Classe.metodo()" nem com "Instancia.metodo()".
- Quando criamos uma classe que estende outra, para que possamos acessar as props da classe pai, usamos 'super()' no construtor. Se a classe pai precisa receber algum valor como parametro, precisamos passar esse valor como parametro em "super(value)" também, ou seja, a classe filha precisa receber e valor como parametro e repassar pra super.
- O objeto "this" não pode ser acessado antes de "super()" ser definido.
- Métodos Factory lidam com tarefas para a entidade.