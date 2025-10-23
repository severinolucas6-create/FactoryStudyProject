# FactoryStudyProject

Padrão: Factory Method

Objetivo
Demonstrar criação de diferentes tipos de sessões de estudo (Sprint, Revisão, Pausa) usando Factory Method para instanciar StudySlot.

Como executar
1. git clone <seu-repo>
2. npm install
3. npm run demo

Estrutura
- src/models/StudySlot.js
- src/factories/SlotFactory.js
- src/examples/demo.js

Explicação breve
O SlotFactory encapsula a lógica de criação de StudySlot. O cliente chama SlotFactory.create(tipo, opts) sem conhecer as classes concretas. Para adicionar um novo tipo, basta inserir um novo case no factory sem alterar o código consumidor.

Saída esperada
19:45 - 60min: Matéria do Dia - Teoria
21:45 - 45min: Revisão Matéria Anterior
20:45 - 15min: Pausa rápida
