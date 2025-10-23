# FactoryStudyProject

**Descrição**  
Projeto de estudo demonstrando o padrão **Factory Method** em Node.js para criar sessões de estudo (StudySlot).

**Estrutura**  
- src/models/StudySlot.js  
- src/factories/SlotFactory.js  
- src/examples/demo.js  
- test/slotFactory.test.js

**Como executar (local)**  
1. Instale dependências:
   npm install

2. Executar demo:
   npm run demo

**Scripts úteis (npm)**  
- **npm run demo** : Executa src/examples/demo.js  
- **npm start** : (opcional para integração com Electron)  
- **npm test** : Executa testes com Jest

**Exemplo de saída esperada**  
19:45 - 60min: Matéria do Dia - Teoria  
21:45 - 45min: Revisão Matéria Anterior  
20:45 - 15min: Pausa rápida

**Objetivo pedagógico**  
Demonstrar como encapsular criação de objetos com uma fábrica centralizada, facilitando a adição de novos tipos de slot sem modificar o código consumidor.

**Como integrar com Electron**  
1. Colocar `src/models` e `src/factories` em um módulo acessível ao processo principal ou preload.  
2. No preload, expor uma função para retornar os slots ao renderer.  
3. No renderer, chamar a API exposta e renderizar a lista.

**License**  
MIT
