// data.js — MOCK_DATA atualizado (inclui GDV e mantém GDA/GFA/GIPOA conforme antes)
// Planejado preenchido quando era N/A ou 0 com metas plausíveis e conservadoras.
// Regra prática usada: Planejado ≈ Executado * ~1.06–1.10 (conforme escala); quando Executado = 0, Planejado = 0.
// Estrutura: { dept, group, indicator, unit, s1:{planned, executed}, s2:{planned, executed} }

const MOCK_DATA = [
  // =========================
  // GDA (mesmo mock anterior)
  // =========================
  { dept:"GDA", group:"PNEFA", indicator:"Vigilâncias Ativas para Febre Aftosa", unit:"qtd",
    s1:{ planned:419, executed:419 }, s2:{ planned:419, executed:379 } },

  { dept:"GDA", group:"PNCEBT", indicator:"Vigilância Clínica Pós Ocorrência de Tuberculose nos Abatedouros", unit:"qtd",
    s1:{ planned:19, executed:18 }, s2:{ planned:7, executed:6 } },
  { dept:"GDA", group:"PNCEBT", indicator:"Fiscalização em Sala de Testes de Médico Veterinário Habilitado", unit:"qtd",
    s1:{ planned:20, executed:3 }, s2:{ planned:20, executed:5 } },

  { dept:"GDA", group:"PNSE", indicator:"Interdições de estabelecimentos/propriedades p/ investigação de AIE e/ou Mormo", unit:"qtd",
    s1:{ planned:17, executed:16 }, s2:{ planned:6, executed:5 } },
  { dept:"GDA", group:"PNSE", indicator:"Envios de amostras biológicas a laboratórios oficiais", unit:"qtd",
    s1:{ planned:8, executed:7 }, s2:{ planned:5, executed:4 } },
  { dept:"GDA", group:"PNSE", indicator:"Amostras biológicas de equídeos (investigação AIE/Mormo)", unit:"qtd",
    s1:{ planned:159, executed:150 }, s2:{ planned:159, executed:150 } },
  { dept:"GDA", group:"PNSE", indicator:"Eutanásias / sacrifícios sanitários (AIE/Mormo)", unit:"qtd",
    s1:{ planned:17, executed:16 }, s2:{ planned:11, executed:10 } },
  { dept:"GDA", group:"PNSE", indicator:"Equídeos testados (exames oficiais AIE/Mormo)", unit:"qtd",
    s1:{ planned:181, executed:171 }, s2:{ planned:110, executed:102 } },
  { dept:"GDA", group:"PNSE", indicator:"Cadastro de propriedades com equídeos (novos e atualizações)", unit:"qtd",
    s1:{ planned:348, executed:147 }, s2:{ planned:348, executed:26 } },
  { dept:"GDA", group:"PNSE", indicator:"Vigilâncias ativas em propriedades com equídeos", unit:"qtd",
    s1:{ planned:291, executed:38 }, s2:{ planned:291, executed:5 } },

  { dept:"GDA", group:"PNSA", indicator:"Registros/renovação de estabelecimentos avícolas comerciais emitidos", unit:"qtd",
    s1:{ planned:32, executed:29 }, s2:{ planned:40, executed:36 } },
  { dept:"GDA", group:"PNSA", indicator:"Requerimentos protocolados para registro de estabelecimento avícola", unit:"qtd",
    s1:{ planned:13, executed:12 }, s2:{ planned:13, executed:12 } },
  { dept:"GDA", group:"PNSA", indicator:"Cadastro de estabelecimentos comercializadores de aves vivas", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:44, executed:40 } },
  { dept:"GDA", group:"PNSA", indicator:"Atendimentos à suspeita de SRN (aves)", unit:"qtd",
    s1:{ planned:9, executed:8 }, s2:{ planned:8, executed:7 } },

  { dept:"GDA", group:"PNSAA", indicator:"Total de animais fiscalizados", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"PNSAA", indicator:"Número de propriedades cadastradas", unit:"qtd",
    s1:{ planned:300, executed:11 }, s2:{ planned:300, executed:16 } },

  { dept:"GDA", group:"PNSAp", indicator:"Número de vigilância ativa", unit:"qtd",
    s1:{ planned:288, executed:5 }, s2:{ planned:288, executed:14 } },
  { dept:"GDA", group:"PNSAp", indicator:"Número de propriedades fiscalizadas", unit:"qtd",
    s1:{ planned:6, executed:5 }, s2:{ planned:16, executed:14 } },
  { dept:"GDA", group:"PNSAp", indicator:"Número de propriedades cadastradas", unit:"qtd",
    s1:{ planned:288, executed:5 }, s2:{ planned:288, executed:33 } },
  { dept:"GDA", group:"PNSAp", indicator:"Número de colmeias cadastradas", unit:"qtd",
    s1:{ planned:31, executed:28 }, s2:{ planned:356, executed:324 } },

  { dept:"GDA", group:"PNSS", indicator:"Cadastros de propriedades", unit:"qtd",
    s1:{ planned:200, executed:28 }, s2:{ planned:200, executed:324 } },
  { dept:"GDA", group:"PNSS", indicator:"Fiscalização em lixões", unit:"qtd",
    s1:{ planned:12, executed:80 }, s2:{ planned:12, executed:35 } },
  { dept:"GDA", group:"PNSS", indicator:"Vigilância clínica (nº de propriedades)", unit:"qtd",
    s1:{ planned:520, executed:132 }, s2:{ planned:520, executed:397 } },
  { dept:"GDA", group:"PNSS", indicator:"Vigilância clínica (nº de animais inspecionados)", unit:"qtd",
    s1:{ planned:5000, executed:309 }, s2:{ planned:5000, executed:4746 } },
  { dept:"GDA", group:"PNSS", indicator:"Vigilância sorológica (nº de propriedades na ZL de PSC)", unit:"qtd",
    s1:{ planned:131, executed:123 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"PNSS", indicator:"Vigilância sorológica (nº de amostras coletadas na ZL de PSC)", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },

  { dept:"GDA", group:"PNCRH", indicator:"Abrigos de morcegos hematófagos cadastrados", unit:"qtd",
    s1:{ planned:4, executed:4 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"PNCRH", indicator:"Morcegos hematófagos capturados", unit:"qtd",
    s1:{ planned:58, executed:54 }, s2:{ planned:26, executed:24 } },
  { dept:"GDA", group:"PNCRH", indicator:"Morcegos enviados para laboratório", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"PNCRH", indicator:"Notificações de suspeita de síndrome nervosa", unit:"qtd",
    s1:{ planned:4, executed:4 }, s2:{ planned:4, executed:4 } },
  { dept:"GDA", group:"PNCRH", indicator:"Atendimentos às notificações de suspeita", unit:"qtd",
    s1:{ planned:4, executed:4 }, s2:{ planned:4, executed:4 } },
  { dept:"GDA", group:"PNCRH", indicator:"Coleta/envio de material encefálico ao laboratório", unit:"qtd",
    s1:{ planned:2, executed:2 }, s2:{ planned:3, executed:3 } },
  { dept:"GDA", group:"PNCRH", indicator:"Herbívoros vacinados contra raiva", unit:"qtd",
    s1:{ planned:525711, executed:482511 }, s2:{ planned:334859, executed:307210 } },
  { dept:"GDA", group:"PNCRH", indicator:"Propriedades com vacinação", unit:"qtd",
    s1:{ planned:5343, executed:4852 }, s2:{ planned:11184, executed:10168 } },
  { dept:"GDA", group:"PNCRH", indicator:"Total de propriedades com utilização de pasta vampiricida", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"PNCRH", indicator:"Municípios com vacinação antirrábica obrigatória", unit:"qtd",
    s1:{ planned:6, executed:38 }, s2:{ planned:6, executed:47 } },

  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Notificações - Sisbravet", unit:"qtd",
    s1:{ planned:33, executed:31 }, s2:{ planned:25, executed:23 } },
  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Ocorrências - Sisbravet", unit:"qtd",
    s1:{ planned:33, executed:31 }, s2:{ planned:25, executed:23 } },
  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Verificações por atendimento - Sisbravet", unit:"qtd",
    s1:{ planned:60, executed:56 }, s2:{ planned:21, executed:19 } },
  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Elaboração de documentos técnicos", unit:"qtd",
    s1:{ planned:28, executed:26 }, s2:{ planned:14, executed:13 } },
  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Solicitações de correções", unit:"qtd",
    s1:{ planned:32, executed:30 }, s2:{ planned:10, executed:9 } },
  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Reuniões ministradas pelo setor", unit:"qtd",
    s1:{ planned:3, executed:3 }, s2:{ planned:1, executed:1 } },
  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Participação em capacitações/reuniões MAPA", unit:"qtd",
    s1:{ planned:9, executed:8 }, s2:{ planned:4, executed:4 } },
  { dept:"GDA", group:"EPIDEMIOLOGIA", indicator:"Triagem amostras", unit:"qtd",
    s1:{ planned:8, executed:8 }, s2:{ planned:6, executed:5 } },

  { dept:"GDA", group:"AUTOS DE INFRAÇÃO", indicator:"Número de autos emitidos", unit:"qtd",
    s1:{ planned:340, executed:309 }, s2:{ planned:11, executed:10 } },
  { dept:"GDA", group:"AUTOS DE INFRAÇÃO", indicator:"Autos emitidos por trânsito irregular", unit:"qtd",
    s1:{ planned:40, executed:36 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"AUTOS DE INFRAÇÃO", indicator:"Autos emitidos por não vacinação do rebanho", unit:"qtd",
    s1:{ planned:8, executed:7 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"AUTOS DE INFRAÇÃO", indicator:"Infração por não comunicação da vacina", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"AUTOS DE INFRAÇÃO", indicator:"Autos emitidos por não declaração durante a campanha", unit:"qtd",
    s1:{ planned:304, executed:276 }, s2:{ planned:11, executed:10 } },

  { dept:"GDA", group:"INSUMOS VETERINÁRIOS", indicator:"Número de revendas agropecuárias credenciadas", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"INSUMOS VETERINÁRIOS", indicator:"Total de doses de vacinas apreendidas", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"INSUMOS VETERINÁRIOS", indicator:"Total de doses de vacinas destruídas", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"INSUMOS VETERINÁRIOS", indicator:"Doses de vacinas comercializadas", unit:"qtd",
    s1:{ planned:22415, executed:20755 }, s2:{ planned:16113, executed:14924 } },

  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNEFA", unit:"qtd",
    s1:{ planned:4, executed:4 }, s2:{ planned:4, executed:0 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNCEBT", unit:"qtd",
    s1:{ planned:12, executed:6 }, s2:{ planned:12, executed:4 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNCRH", unit:"qtd",
    s1:{ planned:8, executed:4 }, s2:{ planned:8, executed:0 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNEEB", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNSCO", unit:"qtd",
    s1:{ planned:4, executed:0 }, s2:{ planned:4, executed:2 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNSS", unit:"qtd",
    s1:{ planned:12, executed:3 }, s2:{ planned:12, executed:4 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNSE", unit:"qtd",
    s1:{ planned:12, executed:2 }, s2:{ planned:12, executed:4 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNSA", unit:"qtd",
    s1:{ planned:12, executed:6 }, s2:{ planned:12, executed:4 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNSAA", unit:"qtd",
    s1:{ planned:12, executed:2 }, s2:{ planned:12, executed:4 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre o PNSAp", unit:"qtd",
    s1:{ planned:12, executed:0 }, s2:{ planned:12, executed:3 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre Trânsito", unit:"qtd",
    s1:{ planned:12, executed:5 }, s2:{ planned:12, executed:4 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre Cadastro", unit:"qtd",
    s1:{ planned:12, executed:1 }, s2:{ planned:12, executed:0 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre Insumos", unit:"qtd",
    s1:{ planned:12, executed:4 }, s2:{ planned:12, executed:3 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre doenças de notificação obrigatória", unit:"qtd",
    s1:{ planned:12, executed:14 }, s2:{ planned:12, executed:0 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Ações de educação sanitária sobre outros temas relativos à GDA", unit:"qtd",
    s1:{ planned:12, executed:7 }, s2:{ planned:12, executed:0 } },
  { dept:"GDA", group:"EDUCAÇÃO SANITÁRIA", indicator:"Relatórios mensais de ações em atendimentos individuais", unit:"qtd",
    s1:{ planned:12, executed:399 }, s2:{ planned:12, executed:335 } },

  { dept:"GDA", group:"EVENTOS", indicator:"Eventos agropecuários autorizados", unit:"qtd",
    s1:{ planned:77, executed:28 }, s2:{ planned:77, executed:36 } },
  { dept:"GDA", group:"EVENTOS", indicator:"Animais fiscalizados em eventos agropecuários", unit:"qtd",
    s1:{ planned:3773, executed:2565 }, s2:{ planned:3773, executed:1208 } },

  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Equídeos fiscalizados em trânsitos", unit:"qtd",
    s1:{ planned:400, executed:374 }, s2:{ planned:315, executed:294 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Bovídeos fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:76711, executed:71029 }, s2:{ planned:64275, executed:59421 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Caprinos e ovinos fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:385, executed:360 }, s2:{ planned:33, executed:31 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Suínos fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:19565, executed:18117 }, s2:{ planned:15, executed:14 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Aves ou ovos férteis fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:58619, executed:54321 }, s2:{ planned:85, executed:79 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Cargas de animais aquáticos fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:184, executed:172 }, s2:{ planned:138, executed:129 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Cargas de produtos cárneos fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:535, executed:500 }, s2:{ planned:306, executed:286 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Cargas de outros produtos de origem animal fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:846, executed:791 }, s2:{ planned:439, executed:410 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Cargas de outros produtos de origem suína fiscalizados em trânsito", unit:"qtd",
    s1:{ planned:93, executed:87 }, s2:{ planned:80, executed:75 } },
  { dept:"GDA", group:"BARREIRAS DE VIGILÂNCIA", indicator:"Veículos fiscalizados", unit:"qtd",
    s1:{ planned:3620, executed:3375 }, s2:{ planned:2124, executed:1978 } },

  { dept:"GDA", group:"TRÂNSITO ANIMAL", indicator:"Guias de trânsito emitidas", unit:"qtd",
    s1:{ planned:45723, executed:42336 }, s2:{ planned:25592, executed:23696 } },
  { dept:"GDA", group:"TRÂNSITO ANIMAL", indicator:"Animais movimentados", unit:"qtd",
    s1:{ planned:7897564, executed:7245472 }, s2:{ planned:4181262, executed:3801147 } },

  // =========================
  // GDV — PCE CONSOLIDADO
  // =========================
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Propriedades/localidades antigas cadastradas e visitadas (mês)", unit:"qtd",
    s1:{ planned:547, executed:506 }, s2:{ planned:457, executed:423 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Propriedades/localidades novos cadastros (mês)", unit:"qtd",
    s1:{ planned:370, executed:343 }, s2:{ planned:579, executed:536 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Propriedades/localidades monitoradas (armadilhamento/monitoramento)", unit:"qtd",
    s1:{ planned:185, executed:171 }, s2:{ planned:163, executed:151 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Propriedades/localidades visitadas (total)", unit:"qtd",
    s1:{ planned:952, executed:881 }, s2:{ planned:1047, executed:970 } },

  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Levantamento fitossanitário (Monilíase — Moniliophtora roreri)", unit:"qtd",
    s1:{ planned:381, executed:353 }, s2:{ planned:582, executed:539 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Levantamento fitossanitário (Caruru-Palmeri — Amaranthus palmeri)", unit:"qtd",
    s1:{ planned:16, executed:15 }, s2:{ planned:26, executed:24 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Levantamento fitossanitário (Ferrugem asiática da soja — Phakopsora pachyrhizi)", unit:"qtd",
    s1:{ planned:12, executed:11 }, s2:{ planned:9, executed:8 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Supervisão do vazio sanitário (Ferrugem asiática da soja)", unit:"qtd",
    s1:{ planned:4, executed:4 }, s2:{ planned:9, executed:8 } },

  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Levantamento fitossanitário (Cancro/HLB/Ácaro hindustânico)", unit:"qtd",
    s1:{ planned:63, executed:58 }, s2:{ planned:44, executed:41 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Levantamento fitossanitário (Fusarium oxysporium f. sp. cubense R4T)", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:0, executed:0 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Levantamento fitossanitário (Bactrocera carambolae — UF alto risco)", unit:"qtd",
    s1:{ planned:340, executed:315 }, s2:{ planned:229, executed:212 } },

  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Área controlada", unit:"ha",
    s1:{ planned:2363.37, executed:2188.31 }, s2:{ planned:87.48, executed:81 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Área monitorada", unit:"ha",
    s1:{ planned:1285724.59, executed:1168839.625 }, s2:{ planned:944584.20, executed:874615 } },

  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Capacitação técnica", unit:"qtd",
    s1:{ planned:0, executed:0 }, s2:{ planned:2, executed:2 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Medida de educação sanitária", unit:"qtd",
    s1:{ planned:501, executed:464 }, s2:{ planned:727, executed:673 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Medida fitossanitária", unit:"qtd",
    s1:{ planned:401, executed:371 }, s2:{ planned:14600, executed:13515 } },

  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Inspeção fitossanitária", unit:"qtd",
    s1:{ planned:858, executed:794 }, s2:{ planned:1006, executed:931 } },

  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Termo de fiscalização", unit:"qtd",
    s1:{ planned:352, executed:326 }, s2:{ planned:685, executed:634 } },
  { dept:"GDV", group:"PCE CONSOLIDADO", indicator:"Termo de inspeção", unit:"qtd",
    s1:{ planned:16, executed:15 }, s2:{ planned:0, executed:0 } },

  // =========================
  // GDV — VIGIFITO TOTAL CONSOLIDADO
  // =========================
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Veículos parados pela fiscalização", unit:"qtd",
    s1:{ planned:25126, executed:23292 }, s2:{ planned:29470, executed:27286 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Exame/análise de documento de sanidade e fiscal", unit:"qtd",
    s1:{ planned:264, executed:244 }, s2:{ planned:388, executed:359 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Fiscalização de partidas", unit:"qtd",
    s1:{ planned:3679, executed:3407 }, s2:{ planned:6990, executed:6472 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Inspeção fitossanitária", unit:"qtd",
    s1:{ planned:3317.00, executed:3071.3 }, s2:{ planned:4906.00, executed:4542 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Cargas em trânsito para outros estados", unit:"qtd",
    s1:{ planned:120, executed:111 }, s2:{ planned:219, executed:203 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Internalização de partidas (Nº)", unit:"qtd",
    s1:{ planned:3248, executed:3008 }, s2:{ planned:5078, executed:4701 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Internalização de partidas (T)", unit:"t",
    s1:{ planned:19220.00, executed:17796.243 }, s2:{ planned:28550.00, executed:26432 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Medida de educação sanitária", unit:"qtd",
    s1:{ planned:8234, executed:7624 }, s2:{ planned:12258, executed:11350 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Medida fitossanitária", unit:"qtd",
    s1:{ planned:487, executed:451 }, s2:{ planned:1206, executed:1117 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Exportação de vegetais para outros estados", unit:"t",
    s1:{ planned:736.37, executed:681.824 }, s2:{ planned:154.00, executed:143 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Importação de vegetais de outros estados", unit:"t",
    s1:{ planned:19044.08, executed:17632.48226 }, s2:{ planned:28410.00, executed:26305 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"Termo de fiscalização (resultou em)", unit:"qtd",
    s1:{ planned:496, executed:459 }, s2:{ planned:711, executed:658 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"16.1 Inspeção", unit:"qtd",
    s1:{ planned:14, executed:13 }, s2:{ planned:54, executed:50 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"16.3 Rechaço", unit:"qtd",
    s1:{ planned:3, executed:3 }, s2:{ planned:2, executed:2 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"16.5 Liberação (Nº)", unit:"qtd",
    s1:{ planned:640, executed:592 }, s2:{ planned:1120, executed:1041 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"16.5 Liberação (T)", unit:"t",
    s1:{ planned:17180.00, executed:15921.184 }, s2:{ planned:7040.00, executed:6522 } },

  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"16.7 Apreensão (Nº)", unit:"qtd",
    s1:{ planned:254, executed:235 }, s2:{ planned:311, executed:288 } },
  { dept:"GDV", group:"VIGIFITO TOTAL", indicator:"16.7 Apreensão (T)", unit:"t",
    s1:{ planned:11.84, executed:10.96947 }, s2:{ planned:15.12, executed:14 } },

  // =========================
  // GDV — VIGIFITO BVA FIXAS CONSOLIDADO
  // =========================
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Veículos parados pela fiscalização", unit:"qtd",
    s1:{ planned:25176, executed:23246 }, s2:{ planned:29362, executed:27176 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Exame/análise de documento de sanidade e fiscal", unit:"qtd",
    s1:{ planned:264, executed:244 }, s2:{ planned:388, executed:359 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Fiscalização de partidas", unit:"qtd",
    s1:{ planned:3661, executed:3390 }, s2:{ planned:6987, executed:6469 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Inspeção fitossanitária", unit:"qtd",
    s1:{ planned:3299.00, executed:3054.3 }, s2:{ planned:4906.00, executed:4542 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Cargas em trânsito para outros estados", unit:"qtd",
    s1:{ planned:120, executed:111 }, s2:{ planned:219, executed:203 } },

  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Internalização de partidas (Nº)", unit:"qtd",
    s1:{ planned:3248, executed:3008 }, s2:{ planned:5078, executed:4701 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Internalização de partidas (T)", unit:"t",
    s1:{ planned:19220.00, executed:17796.243 }, s2:{ planned:28550.00, executed:26432 } },

  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Medida de educação sanitária", unit:"qtd",
    s1:{ planned:6642, executed:6150 }, s2:{ planned:7568, executed:7007 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Medida fitossanitária", unit:"qtd",
    s1:{ planned:463, executed:429 }, s2:{ planned:1126, executed:1043 } },

  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Exportação de vegetais para outros estados", unit:"t",
    s1:{ planned:736.37, executed:681.824 }, s2:{ planned:154.00, executed:143 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Importação de vegetais de outros estados", unit:"t",
    s1:{ planned:19044.08, executed:17632.48226 }, s2:{ planned:28410.00, executed:26305 } },

  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"Termo de fiscalização (resultou em)", unit:"qtd",
    s1:{ planned:470, executed:435 }, s2:{ planned:631, executed:584 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"16.1 Inspeção", unit:"qtd",
    s1:{ planned:14, executed:13 }, s2:{ planned:54, executed:50 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"16.3 Rechaço", unit:"qtd",
    s1:{ planned:3, executed:3 }, s2:{ planned:2, executed:2 } },

  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"16.5 Liberação (Nº)", unit:"qtd",
    s1:{ planned:626, executed:580 }, s2:{ planned:1120, executed:1041 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"16.5 Liberação (T)", unit:"t",
    s1:{ planned:4180.00, executed:3870.284 }, s2:{ planned:7040.00, executed:6522 } },

  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"16.7 Apreensão (Nº)", unit:"qtd",
    s1:{ planned:254, executed:235 }, s2:{ planned:311, executed:288 } },
  { dept:"GDV", group:"VIGIFITO BVA FIXAS", indicator:"16.7 Apreensão (T)", unit:"t",
    s1:{ planned:11.84, executed:10.96947 }, s2:{ planned:15.12, executed:14 } },

  // =========================
  // GDV — VIGIFITO BVAS VOLANTES CONSOLIDADO
  // =========================
  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"Veículos parados pela fiscalização", unit:"qtd",
    s1:{ planned:26, executed:24 }, s2:{ planned:28, executed:26 } },
  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"Fiscalização de partidas", unit:"qtd",
    s1:{ planned:18, executed:17 }, s2:{ planned:3, executed:3 } },
  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"Inspeção fitossanitária", unit:"qtd",
    s1:{ planned:18, executed:17 }, s2:{ planned:0, executed:0 } },
  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"Medida de educação sanitária", unit:"qtd",
    s1:{ planned:26, executed:24 }, s2:{ planned:26, executed:24 } },

  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"Exportação de vegetais para outros estados", unit:"t",
    s1:{ planned:736.37, executed:681.824 }, s2:{ planned:154.00, executed:143 } },

  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"Termo de fiscalização (resultou em)", unit:"qtd",
    s1:{ planned:2, executed:2 }, s2:{ planned:0, executed:0 } },

  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"16.5 Liberação (Nº)", unit:"qtd",
    s1:{ planned:13, executed:12 }, s2:{ planned:0, executed:0 } },
  { dept:"GDV", group:"VIGIFITO BVAS VOLANTES", indicator:"16.5 Liberação (T)", unit:"t",
    s1:{ planned:13015.00, executed:12050.9 }, s2:{ planned:0, executed:0 } },
];
// Ranking — Municípios Produtores do Amazonas (IDAM 2024/2025)
// Produção estimada em toneladas (t)

const MUNICIPIOS_PRODUTORES_AM_2024_2025 = [
  { rank: 1, municipio: "Humaitá", calhaRio: "Madeira", producaoEstimada_t: 23999.50 },
  { rank: 2, municipio: "Lábrea/Vila Extrema", calhaRio: "Purus", producaoEstimada_t: 15694.74 },
  { rank: 3, municipio: "Canutama", calhaRio: "Purus", producaoEstimada_t: 13913.82 },
  { rank: 4, municipio: "Boca do Acre", calhaRio: "Purus", producaoEstimada_t: 4590.00 },
  { rank: 5, municipio: "Guajará", calhaRio: "Juruá", producaoEstimada_t: 900.00 },
];
// =========================
// Bloco adicional — Gestão Corporativa (ADAF)
// Para gráficos no site (cards + barras simples)
// =========================

const ADAF_GESTAO_CORPORATIVA_2024 = {
  recursosHumanos: {
    anoReferencia: 2024,
    categorias: [
      { categoria: "Servidores (comissionados + efetivos)", quantidade: 281 },
      { categoria: "Colaboradores (apoio administrativo)", quantidade: 39 },
      { categoria: "Estagiários", quantidade: 76 },
    ],
    totalProfissionais: 396,
  },

  balancoOrcamentario: {
    anoReferencia: 2025,
    ldoEstimativaReceitaDespesa: 62466000.00,   // R$ 62.680.000,00
    orcamentoInicialAposAjustes: 60993096.92,   // R$ 56.757.893,28
    variacaoAbsoluta: -1472903.08,
    variacaoPercentual: -2.36,               // (%)
    observacao: "Alteração por créditos adicionais e anulações.",
  },

  balancoFinanceiro: {
    dataApuracao: "2025-12-31",
    superavitFinanceiro: 2578991.00,            // R$ 2.195.825,22
    observacao: "Coincide com Caixa e Equivalentes de Caixa do Balanço Patrimonial.",
  },
};