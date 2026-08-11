/* rrml.estudos — Apoio Acadêmico
   Fonte única de verdade para modalidades, duração, preço e conteúdo dos cards.
   Para alterar qualquer preço, duração, descrição ou item incluído, edite SOMENTE este arquivo —
   os cards de preço e o formulário são renderizados dinamicamente a partir daqui. */

window.APOIO_SERVICES = [
  {
    id: 'express',
    emoji: '☕',
    nome: 'Ajuda Express',
    categoria: 'geral',
    duracao: '30 minutos',
    preco: 35,
    precoLabel: 'R$ 35',
    descricao: 'Para uma dúvida específica, revisão rápida, organização inicial de um trabalho ou conteúdo pontual.',
    incluido: [],
    nota: '',
    badge: '',
    cta: 'Quero agendar'
  },
  {
    id: 'tutoria',
    emoji: '🧠',
    nome: 'Tutoria / Apoio Individual',
    categoria: 'estudos',
    duracao: '60 minutos',
    preco: 60,
    precoLabel: 'R$ 60',
    descricao: 'Para estudar um conteúdo com mais calma, revisar uma matéria, tirar dúvidas ou trabalhar junto em uma dificuldade acadêmica.',
    incluido: [],
    nota: '',
    badge: 'Mais escolhido',
    cta: 'Quero agendar'
  },
  {
    id: 'trabalho',
    emoji: '✍️',
    nome: 'Apoio em Trabalho Acadêmico',
    categoria: 'trabalho',
    duracao: '60 minutos',
    preco: 70,
    precoLabel: 'R$ 70',
    descricao: 'Para ajudar na organização, estruturação, leitura, revisão e desenvolvimento de trabalhos acadêmicos.',
    incluido: [
      'Até 20 minutos de leitura prévia do material, quando necessário',
      '60 minutos de encontro online',
      'Organização e orientação durante o encontro'
    ],
    nota: 'Materiais mais extensos ou demandas que exijam maior leitura e preparação podem precisar de mais de um encontro.',
    badge: '',
    cta: 'Quero ajuda com um trabalho'
  },
  {
    id: 'apresentacao',
    emoji: '🎤',
    nome: 'Trabalho + Apresentação',
    categoria: 'apresentacao',
    duracao: '90 minutos',
    preco: 95,
    precoLabel: 'R$ 95',
    descricao: 'Para estudantes que precisam organizar o trabalho e também preparar sua apresentação, slides ou seminário.',
    incluido: [
      'Revisão da estrutura',
      'Organização dos principais pontos',
      'Estruturação dos slides',
      'Preparação da fala',
      'Orientação para apresentação oral'
    ],
    nota: '',
    badge: '',
    cta: 'Quero preparar minha apresentação'
  },
  {
    id: 'pacote',
    emoji: '📚',
    nome: 'Pacote de Estudos',
    categoria: 'estudos',
    duracao: '4 encontros de 60 minutos',
    preco: 220,
    precoLabel: 'R$ 220',
    descricao: 'Para quem quer acompanhamento durante algumas semanas, está com dificuldade em uma matéria ou possui um projeto acadêmico que exige mais organização.',
    incluido: [],
    nota: '',
    badge: 'Economia de R$ 20 em relação a 4 encontros individuais',
    cta: 'Quero o pacote'
  }
];

/* Mapeia cada opção de "Como posso te ajudar?" ao bloco condicional do formulário
   que deve aparecer (ou null, quando nenhum bloco extra é necessário). */
window.APOIO_HELP_TYPES = [
  { id: 'estudar_materia', label: 'Estudar uma matéria ou conteúdo', block: 'estudos' },
  { id: 'duvida_especifica', label: 'Tirar uma dúvida específica', block: 'estudos' },
  { id: 'revisar_prova', label: 'Revisar para uma prova', block: 'estudos' },
  { id: 'apoio_trabalho', label: 'Apoio em trabalho acadêmico', block: 'trabalho' },
  { id: 'apoio_apresentacao', label: 'Apoio em apresentação/seminário', block: 'apresentacao' },
  { id: 'organizacao_estudos', label: 'Organização dos estudos', block: null },
  { id: 'ainda_nao_sei', label: 'Ainda não sei', block: null }
];
