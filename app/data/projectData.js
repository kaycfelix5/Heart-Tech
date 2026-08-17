export const projectInfo = {
  name: "Heart-Tech",
  fullName: "Sistema Inteligente de Monitoramento para Pessoas com Deficiência Cognitiva",
  tagline: "Monitoramento inteligente para mais segurança e autonomia.",
  description: "Uma solução integrada de hardware embarcado e aplicativo móvel desenvolvida para o acompanhamento em tempo real e geofencing de pessoas vulneráveis com deficiência cognitiva.",
  academicContext: "Projeto Acadêmico de Desenvolvimento Tecnológico e Assistivo",
  professor: "Prof. Responsável / Orientador",
  turma: "Engenharia / Ciência da Computação - 2026",
  
  problem: {
    title: "O Desafio do Acompanhamento Seguro",
    statsMain: "17 Milhões",
    statsSub: "de pessoas (aprox. 8,4% da população brasileira) possuem algum tipo de deficiência.",
    conditions: [
      { label: "TEA", description: "Transtorno do Espectro Autista" },
      { label: "Deficiência Intelectual", description: "Dificuldades de orientação espaço-temporal" },
      { label: "Alzheimer", description: "Risco frequente de perda de memória e desorientação urbana" }
    ],
    risks: [
      { title: "Risco Físico e Vulnerabilidade", desc: "Exposição a acidentes, atropelamentos e ambientes de perigo." },
      { title: "Impacto Psicológico", desc: "Estresse extremo para a pessoa desorientada e angústia constante para a família." },
      { title: "Dificuldade de Localização Rápida", desc: "Atraso no encontro aumenta exponencialmente o risco à integridade física." },
      { title: "Sobrecarga dos Cuidadores", desc: "Exaustão física e emocional por vigilância contínua não automatizada." }
    ]
  },

  generalObjective: "Desenvolver um dispositivo vestível no formato de pulseira inteligente integrado a um aplicativo móvel para monitoramento de localização em tempo real, emissão de alertas geofencing, autonomia mínima de 24h e precisão média de até ±5m em ambiente aberto.",
  
  specificObjectives: [
    "Implementar sistema de geolocalização com módulo GPS NEO-6M e rede celular GSM/GPRS;",
    "Desenvolver aplicativo móvel em React Native (Android) para acompanhamento remoto por cuidadores;",
    "Implementar sistema de alertas instantâneos para saída de zona segura e bateria crítica;",
    "Garantir a segurança e criptografia dos dados transmitidos com protocolo TLS/HTTPS;",
    "Desenvolver carcaça física em impressão 3D resistente a impactos e ergonomicamente confortável;",
    "Buscar conforto e usabilidade adaptada ao público com sensibilidade tátil;",
    "Criar uma arquitetura de hardware e software de baixo custo e alta modularidade."
  ],

  differentials: [
    { title: "Baixo Custo Planejado", desc: "Custo estimado do protótipo entre R$ 250 e R$ 300, tornando a solução mais acessível." },
    { title: "Foco em Deficiência Cognitiva", desc: "Design físico e lógica de alertas desenhados especificamente para a segurança do usuário vulnerável." },
    { title: "Geofencing para Cuidadores", desc: "Delimitação de áreas de segurança com alerta ativo em tempo real se houver transposição." },
    { title: "Estrutura Física Resistente", desc: "Gabinete impresso em 3D projetado para absorção de impactos do cotidiano." },
    { title: "Arquitetura Modular", desc: "Fácil substituição e manutenção de módulos de sensores e conectividade." },
    { title: "Integração Hardware-Software", desc: "Sincronização direta entre o microcontrolador ESP32 e a plataforma web/mobile." }
  ],

  commercialComparison: {
    note: "Diferenciais apresentados como proposta/planejamento de desenvolvimento do projeto acadêmico, sem afirmação de vantagem comercial já homologada.",
    competitors: [
      { name: "Apple AirTag", limit: "Depende de ecossistema de dispositivos Apple próximos (Bluetooth); sem rede GSM autônoma própria." },
      { name: "Jiobit / GPS Comerciais", limit: "Alto custo de aquisição, assinaturas mensais elevadas e design genérico não adaptado." },
      { name: "Heart-Tech (Proposta)", limit: "Comunicação GSM própria, geofencing ativo, baixo custo de prototipagem e foco assistivo." }
    ]
  },

  systemFlow: [
    { step: 1, name: "Pulseira (ESP32)", tech: "ESP32 DevKit", desc: "Microcontrolador central processa leituras e coordena envio.", icon: "Cpu" },
    { step: 2, name: "GPS NEO-6M", tech: "NEO-6M Module", desc: "Capta latitude e longitude via satélite.", icon: "Radio" },
    { step: 3, name: "Rede GSM / GPRS", tech: "SIM800L Module", desc: "Transmite os dados via rede móvel com cartão SIM.", icon: "Wifi" },
    { step: 4, name: "API Server", tech: "Node.js / Express", desc: "Backend REST valida, processa e aplica regras de geofencing.", icon: "Server" },
    { step: 5, name: "Banco de Dados", tech: "PostgreSQL / Sequelize", desc: "Armazena histórico de posições, registros de alarme e logs.", icon: "Database" },
    { step: 6, name: "Aplicativo Mobile", tech: "React Native (Android)", desc: "Exibe mapa em tempo real e dispara notificações aos cuidadores.", icon: "Smartphone" }
  ],

  hardware: [
    { name: "ESP32", category: "Microcontrolador", role: "Unidade Central de Processamento (CPU/Wi-Fi/Bluetooth)", desc: "Gerencia a coleta dos dados do GPS, controla o módulo SIM800L e gerencia os estados de consumo energético.", status: "Planejado" },
    { name: "GPS NEO-6M", category: "Sensor de Posição", role: "Obtenção de Coordenadas Globais", desc: "Fornece latitude, longitude, altitude e velocidade com antena cerâmica acoplada.", status: "Planejado" },
    { name: "SIM800L", category: "Comunicação Móvel", role: "Módulo GSM/GPRS Quad-band", desc: "Permite a transmissão remota de dados via rede celular GSM mesmo em locais sem Wi-Fi.", status: "Planejado" },
    { name: "Li-Po 3.7V 1000mAh", category: "Alimentação", role: "Bateria Recarregável", desc: "Garante autonomia de operação contínua para o protótipo vestível.", status: "Planejado" },
    { name: "TP4056", category: "Gerenciador de Carga", role: "Módulo Carregador com Proteção", desc: "Controla a carga da bateria Li-Po via porta Micro-USB/USB-C com proteção contra sobrecarga.", status: "Planejado" }
  ],

  features: [
    { title: "Localização em Tempo Real", desc: "Transmissão contínua da latitude e longitude para acompanhamento pelo cuidador.", icon: "MapPin" },
    { title: "Geofencing (Cerca Virtual)", desc: "Configuração de raio de segurança no mapa com detecção automática de violação de perímetro.", icon: "Target" },
    { title: "Alertas Automáticos", desc: "Notificações instantâneas enviadas ao smartphone sobre fuga de perímetro, emergência ou bateria fraca.", icon: "AlertTriangle" },
    { title: "Histórico de Localização", desc: "Armazenamento seguro de rotas e registros passados para consulta e auditoria.", icon: "Clock" },
    { title: "Monitoramento da Bateria", desc: "Exibição da porcentagem de energia restante do dispositivo em tempo real.", icon: "Battery" },
    { title: "Botão de Emergência SOS", desc: "Acionamento rápido integrado para envio de alerta de pânico com prioridade máxima.", icon: "Zap" }
  ],

  dataPayload: {
    example: {
      device_id: "HT001",
      latitude: -20.123456,
      longitude: -51.123456,
      battery: 78,
      timestamp: "2026-04-15T14:32:10Z"
    },
    fields: [
      { name: "device_id", type: "String", desc: "Identificador único do dispositivo no sistema (Ex: 'HT001')" },
      { name: "latitude", type: "Float", desc: "Coordenada geográfica de latitude obtida pelo GPS" },
      { name: "longitude", type: "Float", desc: "Coordenada geográfica de longitude obtida pelo GPS" },
      { name: "battery", type: "Integer", desc: "Porcentagem da carga da bateria de 0 a 100%" },
      { name: "timestamp", type: "ISO 8601 String", desc: "Data e horário exato da medição no padrão UTC" }
    ],
    protocolInfo: [
      { label: "Formato de Dados", value: "JSON (JavaScript Object Notation)" },
      { label: "Método HTTP", value: "POST /api/v1/telemetry" },
      { label: "Segurança de Transporte", value: "HTTPS / TLS 1.3 Criptografado" },
      { label: "Padrão Temporal", value: "ISO 8601 (YYYY-MM-DDTHH:mm:ssZ)" }
    ]
  },

  techStack: [
    { category: "Hardware Embarcado", items: ["ESP32 DevKit V1", "Módulo GPS NEO-6M", "Módulo SIM800L GPRS", "Bateria Li-Po 3.7V 1000mAh", "Módulo TP4056"], status: "Em Planejamento" },
    { category: "Backend & API", items: ["Node.js", "Express Framework", "RESTful Architecture", "JSON Web Tokens (JWT)"], status: "Em Planejamento" },
    { category: "Banco de Dados", items: ["PostgreSQL", "Sequelize ORM", "PostGIS (Extensão Geográfica)"], status: "Em Planejamento" },
    { category: "Aplicativo Mobile", items: ["React Native", "Android SDK", "React Native Maps", "Expo / CLI"], status: "Em Planejamento" },
    { category: "Ferramentas & Design", items: ["VS Code", "GitHub", "Postman", "Figma", "Trello / Kanban"], status: "Em Uso" }
  ],

  security: [
    { title: "Criptografia em Trânsito (TLS/HTTPS)", desc: "Todos os pacotes de dados transmitidos entre a pulseira SIM800L e o servidor trafegam com protocolo criptografado." },
    { title: "Autenticação e Controle de Acesso", desc: "Acesso restrito ao aplicativo por token JWT e credenciais autenticadas de cuidadores autorizados." },
    { title: "Proteção de Dados Pessoais (LGPD/ANPD)", desc: "Diretrizes de privacidade por design, respeitando a sensibilidade das informações de geolocalização do usuário vulnerável." },
    { title: "Armazenamento Seguro", desc: "Banco de dados com senhas hash (bcrypt) e controle estrito de permissões de tabela." }
  ],

  metrics: [
    { name: "Precisão GPS", target: "≤ 5 metros", status: "Meta de Validação", desc: "Erro máximo de raio em ambiente aberto." },
    { name: "Tempo de Fix GPS", target: "≤ 60 segundos", status: "Meta de Validação", desc: "Tempo máximo para primeiro bloqueio de satélite." },
    { name: "Delay de Envio", target: "≤ 10 segundos", status: "Meta de Validação", desc: "Tempo de tráfego entre a leitura e a chegada à API." },
    { name: "Taxa de Erro", target: "≤ 10%", status: "Meta de Validação", desc: "Tolerância máxima de perda de pacotes em roaming." },
    { name: "Autonomia Final", target: "≥ 24 horas", status: "Meta de Validação", desc: "Duração operacional contínua pretendida." },
    { name: "Autonomia MVP (Inicial)", target: "≥ 12 horas", status: "Meta Intermediária", desc: "Meta mínima para validação de protótipo inicial." },
    { name: "Resistência a Queda", target: "Até 1 metro", status: "Meta de Validação", desc: "Integridade estrutural da carcaça 3D." },
    { name: "Tempo de Recarga", target: "≤ 2 horas", status: "Meta de Validação", desc: "Recarga de 0 a 100% via TP4056." }
  ],

  scope: {
    included: [
      "Protótipo físico funcional da pulseira com ESP32 e componentes acoplados",
      "Aplicativo móvel Android funcional para os cuidadores",
      "Sistema de geolocalização remota via GPS e GSM",
      "Sistema de geofencing com emissão de alertas de perímetro",
      "Estrutura física impressa em 3D resistente a quedas de até 1m",
      "Documentação técnica e modelagem completa do projeto"
    ],
    excluded: [
      "Comercialização em larga escala ou produção fabril",
      "Homologação e certificação formal junto à ANATEL",
      "Publicação oficial nas lojas de aplicativos (Google Play / App Store)",
      "Produção industrial em injeção de plástico comercial"
    ]
  },

  sprints: [
    {
      number: 1,
      name: "Sprint 1 – Planejamento e Modelagem",
      date: "30/05",
      status: "CONCLUÍDA",
      focus: "Modelagem conceitual, protótipos de interface, personas, mapa da empatia, diagrama de entidades e documentação técnica.",
      tasksCount: 8
    },
    {
      number: 2,
      name: "Sprint 2 – Desenvolvimento de Software e DB",
      date: "15/07",
      status: "A FAZER",
      focus: "Modelagem do Banco de Dados, montagem da API Back End e desenvolvimento da interface Front End do App.",
      tasksCount: 3
    },
    {
      number: 3,
      name: "Sprint 3 – Integração, Framework e Testes",
      date: "30/09",
      status: "A FAZER",
      focus: "Montagem da estrutura do Framework, alinhamento final de ferramentas e testes integrados do produto.",
      tasksCount: 3
    }
  ],

  kanbanBoard: {
    summary: {
      totalSprints: 3,
      sprint1Status: "CONCLUÍDA",
      sprint2Status: "A FAZER",
      sprint3Status: "A FAZER",
      doingCount: 0,
      blockedCount: 1,
      completedSprint1Count: 8
    },
    columns: [
      {
        id: "todo",
        title: "A FAZER",
        color: "amber",
        tasks: [
          { id: "k1", title: "Banco de Dados S2", sprint: "Sprint 2", tag: "Backend / DB" },
          { id: "k2", title: "Montar o Back End S2", sprint: "Sprint 2", tag: "Backend API" },
          { id: "k3", title: "Montar o Front End S2", sprint: "Sprint 2", tag: "Mobile UI" },
          { id: "k4", title: "Montar o Frame Work S3", sprint: "Sprint 3", tag: "Infra / System" },
          { id: "k5", title: "Alinhas ferramentas S3", sprint: "Sprint 3", tag: "DevOps / Tools" },
          { id: "k6", title: "Testar Produto S3", sprint: "Sprint 3", tag: "QA / Testes" }
        ]
      },
      {
        id: "doing",
        title: "FAZENDO",
        color: "blue",
        tasks: []
      },
      {
        id: "blocked",
        title: "BLOQUEADO",
        color: "red",
        tasks: [
          {
            id: "kb1",
            title: "Professor – Peças do Projeto",
            sprint: "Hardware / Suprimentos",
            tag: "Dependência Externa",
            desc: "Aguardando fornecimento/liberação das peças de hardware necessárias para a montagem física do protótipo."
          }
        ]
      },
      {
        id: "done1",
        title: "FEITO – SPRINT 01 (30/05)",
        color: "emerald",
        tasks: [
          { id: "kd1", title: "Modelo – Baixa Fidelidade", sprint: "Sprint 1", tag: "UX / Wireframe" },
          { id: "kd2", title: "Modelo – Média Fidelidade", sprint: "Sprint 1", tag: "UI Mockups" },
          { id: "kd3", title: "Documentação – Projeto", sprint: "Sprint 1", tag: "Docs" },
          { id: "kd4", title: "Modelo – Alta Fidelidade", sprint: "Sprint 1", tag: "UI Design Final" },
          { id: "kd5", title: "Definir Personas S1", sprint: "Sprint 1", tag: "Pesquisa UX" },
          { id: "kd6", title: "Desenvolver – Apresentação S1", sprint: "Sprint 1", tag: "Slides / Pitch" },
          { id: "kd7", title: "Mapa da Empatia – Personas S1", sprint: "Sprint 1", tag: "Pesquisa UX" },
          { id: "kd8", title: "Desenvolver – Diagrama de Entidades S1", sprint: "Sprint 1", tag: "Arquitetura DB" }
        ]
      },
      {
        id: "done2",
        title: "FEITO – SPRINT 02 (15/07)",
        color: "emerald",
        tasks: []
      },
      {
        id: "done3",
        title: "FEITO – SPRINT 03 (30/09)",
        color: "emerald",
        tasks: []
      }
    ]
  },

  risks: [
    {
      risk: "GPS Impreciso em Ambientes Fechados",
      impact: "Médio / Alto",
      mitigation: "Utilização complementar de dados de rede móvel (LBS/Cell ID) e triangulação para suporte à localização em áreas cobertas."
    },
    {
      risk: "Alto Consumo de Bateria do ESP32/SIM800L",
      impact: "Alto",
      mitigation: "Implementação de algoritmo de Deep Sleep, envio intervalado de pacotes (telemetria dinâmica) e otimização do firmware."
    },
    {
      risk: "Falha de Conexão na Rede GSM/GPRS",
      impact: "Médio",
      mitigation: "Armazenamento temporário em buffer local na memória Flash do ESP32 e protocolo de reenvio automático assim que o sinal for restabelecido."
    },
    {
      risk: "Vazamento ou Interceptação de Dados",
      impact: "Crítico",
      mitigation: "Criptografia TLS 1.3 em toda a comunicação HTTP POST, autenticação forte de API e hash seguro no banco de dados."
    }
  ],

  prototypeCost: {
    items: [
      { item: "Microcontrolador ESP32 DevKit", cost: 45.00 },
      { item: "Módulo GPS NEO-6M com Antena", cost: 35.00 },
      { item: "Módulo GSM/GPRS SIM800L", cost: 40.00 },
      { item: "Bateria Li-Po 3.7V 1000mAh", cost: 30.00 },
      { item: "Estrutura Físico-Impressa 3D (Gabinete)", cost: 50.00 },
      { item: "Insumos Diversos (Fios, TP4056, Interruptor, PCB)", cost: 50.00 }
    ],
    rangeMin: 250.00,
    rangeMax: 300.00,
    note: "Valores referentes à estimativa de custo dos componentes do protótipo inicial (MVP acadêmico), não constituindo preço de produto comercializado em série."
  },

  team: [
    {
      name: "Integrante 1",
      role: "Desenvolvedor Hardware & Firmware",
      area: "Sistemas Embarcados / ESP32",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      avatar: "/team-placeholder.png"
    },
    {
      name: "Integrante 2",
      role: "Desenvolvedor Backend & DB",
      area: "Node.js / PostgreSQL",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      avatar: "/team-placeholder.png"
    },
    {
      name: "Integrante 3",
      role: "Desenvolvedor Mobile UI/UX",
      area: "React Native / Figma",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      avatar: "/team-placeholder.png"
    },
    {
      name: "Integrante 4",
      role: "Documentação & Garantia de Qualidade",
      area: "Scrum / Testes / UX Research",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      avatar: "/team-placeholder.png"
    }
  ]
};
