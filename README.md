# FactoryStudyProject

**Descrição**  
Projeto de estudo demonstrando o padrão **Factory Method** em Node.js para criar sessões de estudo (StudySlot).

**Status**  
Demo funcional; testes unitários com Jest passando.

**Estrutura**  
- src/models/StudySlot.js  
- src/factories/SlotFactory.js  
- src/examples/demo.js  
- preload.js  
- offline.html  
- test/slotFactory.test.js

**Como executar (local)**  
1. Instalar dependências:  
   npm install

2. Executar demo:  
   npm run demo

3. Rodar testes:  
   npm test

**Scripts úteis (npm)**  
- **npm run demo** : Executa src/examples/demo.js  
- **npm start** : Inicia a aplicação Electron apontando para sua entrada principal  
- **npm test** : Executa testes com Jest

**Exemplo de saída esperada**  
19:45 - 60min: Matéria do Dia - Teoria  
21:45 - 45min: Revisão Matéria Anterior  
20:45 - 15min: Pausa rápida

**Objetivo pedagógico**  
Demonstrar como encapsular criação de objetos com uma fábrica centralizada, facilitando a adição de novos tipos de slot sem modificar o código consumidor.

**Integração mínima com Electron**  
- preload.js expõe getDemoSlots via contextBridge.  
- offline.html consome window.studyAPI.getDemoSlots e renderiza a lista.  
- Configure BrowserWindow para usar preload.js e carregar offline.html.

**Contribuição**  
1. Fork e branch com nome claro.  
2. Abra pull request com descrição das mudanças.  
3. Execute npm test antes de submeter.

**License**  
MIT
