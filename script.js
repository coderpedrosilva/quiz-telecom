const TIME_LIMIT = 25;

let timeLeft;
let timerInterval;
let answered = false;

let currentQuestion = 0;
let correctAnswers = 0;
let questions = [];

/*
==================================================
                CABLING
==================================================
*/
const allQuestions = [
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é o material do condutor utilizado no cabo LAN Expert Cat5e?",
        answers: [
            { text: "Cobre eletrolítico nu 100% cobre virgem", correct: true },
            { text: "Cobre eletrolítico estanhado com controle industrial de pureza", correct: false },
            { text: "Cobre CCA (Copper Clad Aluminum)", correct: false },
            { text: "Alumínio com revestimento superficial de cobre para condução elétrica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é a bitola do condutor do cabo LAN Expert Cat5e?",
        answers: [
            { text: "24 AWG", correct: true },
            { text: "23 AWG", correct: false },
            { text: "26 AWG", correct: false },
            { text: "22 AWG", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é o material do isolamento dos condutores?",
        answers: [
            { text: "Polietileno de Alta Densidade (PEAD)", correct: true },
            { text: "Polietileno de média densidade para aplicações genéricas", correct: false },
            { text: "PVC flexível", correct: false },
            { text: "Polipropileno retardante a chamas para cabos especiais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é o material da capa externa do cabo?",
        answers: [
            { text: "Policloreto de Vinila (PVC)", correct: true },
            { text: "Policloreto de vinila com aditivos industriais", correct: false },
            { text: "LSZH halogen-free", correct: false },
            { text: "PEAD com proteção mecânica para ambientes externos severos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Quantos pares o cabo LAN Expert pode possuir?",
        answers: [
            { text: "4 pares (8 vias) ou 2 pares (4 vias)", correct: true },
            { text: "4 pares (8 vias) para aplicações de rede estruturada", correct: false },
            { text: "Somente 2 pares", correct: false },
            { text: "6 pares utilizados em aplicações específicas de telefonia", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é a classe de flamabilidade do cabo LAN Expert Cat5e?",
        answers: [
            { text: "CMX conforme IEC 60332-1 e ABNT NBR 14705", correct: true },
            { text: "CMR conforme normas de instalação vertical interna", correct: false },
            { text: "CMP (Plenum)", correct: false },
            { text: "LSZH halogen-free para ambientes de alta exigência", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é a faixa de temperatura de operação do cabo LAN Expert Cat5e?",
        answers: [
            { text: "-20°C a 60°C", correct: true },
            { text: "-10°C a 70°C", correct: false },
            { text: "0°C a 50°C", correct: false },
            { text: "-40°C a 85°C", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual o comprimento padrão da embalagem em caixa?",
        answers: [
            { text: "305 metros", correct: true },
            { text: "300 metros", correct: false },
            { text: "200 metros", correct: false },
            { text: "333 metros", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Por que o cabo LAN Expert Cat5e pode ser utilizado com Gigabit Ethernet?",
        answers: [
            { text: "Porque atende parâmetros de desempenho como NEXT, ELFEXT e Delay Skew", correct: true },
            { text: "Porque cumpre requisitos elétricos de transmissão até 100 MHz", correct: false },
            { text: "Porque possui maior espessura mecânica externa", correct: false },
            { text: "Porque utiliza materiais estruturais mais robustos na capa externa", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é a principal vantagem do trançamento dos pares no cabo LAN Expert?",
        answers: [
            { text: "Reduzir interferências eletromagnéticas e melhorar o desempenho do sinal", correct: true },
            { text: "Reduzir ruídos elétricos entre os pares durante a transmissão", correct: false },
            { text: "Facilitar o processo de crimpagem", correct: false },
            { text: "Aumentar a robustez física do cabo durante a instalação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Por que o Hércules 1.0 é indicado para ambientes externos?",
        answers: [
            { text: "Porque possui dupla camada (PVC + PEAD com proteção UV) e blindagem FTP", correct: true },
            { text: "Porque possui apenas capa externa em PEAD sem necessidade de proteção adicional", correct: false }, // próximo (incompleto)
            { text: "Porque suporta temperaturas negativas extremas", correct: false }, // curto (genérico e incorreto)
            { text: "Porque sua construção elimina totalmente a ação do sol e da umidade", correct: false } // longo (afirmação absoluta falsa)
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Qual o papel da fita de polietileno aluminizada presente na blindagem?",
        answers: [
            { text: "Reduzir ruídos eletromagnéticos e aumentar a estabilidade do sinal", correct: true },
            { text: "Reduzir interferências mecânicas causadas por tração do cabo", correct: false }, // próximo (conceito errado)
            { text: "Substituir a função do fio terra", correct: false }, // curto
            { text: "Aumentar a capacidade de condução elétrica dos pares trançados", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Qual é a função do fio terra presente na construção do cabo?",
        answers: [
            { text: "Drenar interferências captadas pela blindagem FTP", correct: true },
            { text: "Distribuir cargas elétricas entre os pares de dados", correct: false }, // próximo
            { text: "Fornecer alimentação elétrica aos dispositivos PoE", correct: false }, // curto
            { text: "Eliminar a necessidade de aterramento em racks e painéis", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Por que a segunda capa em PEAD com proteção UV aumenta a vida útil do cabo?",
        answers: [
            { text: "Porque protege contra degradação química, térmica e solar", correct: true },
            { text: "Porque reduz a interferência eletromagnética externa no sinal", correct: false }, // próximo
            { text: "Porque aumenta a taxa de transmissão de dados", correct: false }, // curto
            { text: "Porque substitui completamente a função da blindagem metálica", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "O que a primeira capa interna em PVC cinza protege?",
        answers: [
            { text: "Contra poeira, sol, chuva e abrasão interna", correct: true },
            { text: "Contra esforços mecânicos extremos durante tração contínua", correct: false }, // próximo
            { text: "Contra interferência magnética de motores", correct: false }, // curto
            { text: "Contra descargas elétricas diretas provenientes da rede elétrica", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Por que um diâmetro externo nominal de 7,5 mm é relevante para instalação?",
        answers: [
            { text: "Impacta na robustez mecânica e no tipo de conduíte necessário", correct: true },
            { text: "Define diretamente a categoria elétrica do cabo de rede", correct: false }, // próximo
            { text: "Determina a velocidade de Gigabit Ethernet", correct: false }, // curto
            { text: "Garante compatibilidade automática com conectores RJ45 industriais", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Qual parâmetro elétrico garante compatibilidade com Cat5e?",
        answers: [
            { text: "Par trançado de 100 Ohms até 100 MHz", correct: true },
            { text: "Controle de impedância elétrica apenas no condutor central", correct: false }, // próximo
            { text: "Resistência máxima de 900 N", correct: false }, // curto
            { text: "Capa externa em PEAD com proteção UV para uso externo", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Qual a função do isolamento em polietileno de alta densidade dos pares?",
        answers: [
            { text: "Garantir estabilidade dielétrica e isolamento elétrico", correct: true },
            { text: "Reduzir a interferência eletromagnética externa no cabo", correct: false }, // próximo
            { text: "Aumentar a proteção UV", correct: false }, // curto
            { text: "Reforçar mecanicamente o cabo contra impactos e tração", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Por que a gravação no cabo inclui a norma EIA/TIA 568?",
        answers: [
            { text: "Para indicar conformidade com normas de cabeamento estruturado", correct: true },
            { text: "Para informar a categoria física e o diâmetro externo do cabo", correct: false }, // próximo
            { text: "Para indicar compatibilidade com fibra óptica", correct: false }, // curto
            { text: "Para identificar o tipo de blindagem e o nível de proteção UV", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Por que o cabo utiliza 4 pares (8 vias)?",
        answers: [
            { text: "Para permitir Gigabit Ethernet e aplicações profissionais", correct: true },
            { text: "Para garantir maior resistência mecânica durante a instalação", correct: false }, // próximo
            { text: "Para alimentar dispositivos elétricos", correct: false }, // curto
            { text: "Para permitir comunicação óptica híbrida sem conversores", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e STP",
        question: "Qual vantagem comercial direta o Hércules 1.0 entrega frente a cabos Cat5e comuns?",
        answers: [
            { text: "Menos falhas, mais estabilidade e maior vida útil", correct: true },
            { text: "Maior robustez mecânica sem impacto na performance elétrica", correct: false }, // próximo
            { text: "Maior largura de banda que Cat6", correct: false }, // curto
            { text: "Capacidade de transmissão óptica integrada ao cabo metálico", correct: false } // longo
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual é a função das estrias presentes na capa externa do cabo GTS Cat5e?",
        answers: [
            { text: "Aumentar a aderência no manuseio e reduzir o atrito durante a instalação", correct: true },
            { text: "Aumentar a aderência no manuseio e facilitar a passagem em eletrodutos", correct: false },
            { text: "Blindar o cabo contra interferências eletromagnéticas", correct: false },
            { text: "Modificar as características elétricas do cabo durante a transmissão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Por que o cabo GTS Cat5e pode ser usado tanto em ambientes internos quanto externos?",
        answers: [
            { text: "Porque possui capa de PVC CMX resistente a UV e intempéries", correct: true },
            { text: "Porque possui capa externa em PVC com proteção mecânica básica", correct: false },
            { text: "Porque possui blindagem metálica FTP", correct: false },
            { text: "Porque suporta temperaturas extremamente elevadas sem degradação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual característica reduz a interferência eletromagnética entre os pares?",
        answers: [
            { text: "O trançamento dos pares", correct: true },
            { text: "A disposição alternada dos pares ao longo do cabo", correct: false },
            { text: "A cor do isolamento", correct: false },
            { text: "O diâmetro externo total do cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual a função dos microfilamentos presentes na capa externa?",
        answers: [
            { text: "Reduzir o atrito e facilitar o puxamento do cabo em eletrodutos", correct: true },
            { text: "Reduzir o atrito durante o lançamento e manuseio do cabo", correct: false },
            { text: "Blindar contra campos magnéticos", correct: false },
            { text: "Aumentar a resistência elétrica dos condutores internos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "O que garante a classificação CMX no cabo GTS Cat5e?",
        answers: [
            { text: "Segurança contra propagação de chamas em tubulações metálicas", correct: true },
            { text: "Atendimento a critérios básicos de resistência à propagação de chamas", correct: false },
            { text: "Blindagem eletromagnética total do cabo", correct: false },
            { text: "Proteção contra surtos elétricos e descargas atmosféricas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Por que respeitar o raio mínimo de curvatura é importante?",
        answers: [
            { text: "Evita danos mecânicos e perda de desempenho elétrico", correct: true },
            { text: "Evita deformações físicas que afetam o desempenho do cabo", correct: false },
            { text: "Aumenta a velocidade do sinal", correct: false },
            { text: "Melhora a aparência visual da instalação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "O que significa o cabo ser U/UTP?",
        answers: [
            { text: "Cabo sem blindagem, com pares trançados", correct: true },
            { text: "Cabo sem blindagem individual nos pares de transmissão", correct: false },
            { text: "Cabo com blindagem total em cada par", correct: false },
            { text: "Cabo projetado para instalação subterrânea direta", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual a vantagem do cobre eletrolítico virgem 24 AWG?",
        answers: [
            { text: "Menor resistência elétrica e maior estabilidade de transmissão", correct: true },
            { text: "Menor resistência elétrica e melhor controle de sinal", correct: false },
            { text: "Maior flexibilidade mecânica", correct: false },
            { text: "Menor diâmetro externo do cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual norma garante compatibilidade com cabeamento estruturado?",
        answers: [
            { text: "EIA/TIA 568-2-D", correct: true },
            { text: "EIA/TIA 568 aplicada a padrões genéricos de rede", correct: false },
            { text: "IEEE 802.11ax", correct: false },
            { text: "USB 3.2", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual a principal vantagem competitiva do GTS Cat5e frente a cabos genéricos?",
        answers: [
            { text: "Controle completo de parâmetros elétricos e mecânicos", correct: true },
            { text: "Controle rigoroso de parâmetros técnicos durante a fabricação", correct: false },
            { text: "Velocidade superior ao Cat6", correct: false },
            { text: "Transmissão direta por fibra óptica sem conversores", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual é a função da cruzeta presente no cabo GTS Cat6?",
        answers: [
            { text: "Separar fisicamente os pares para reduzir interferências eletromagnéticas", correct: true },
            { text: "Separar fisicamente os pares para organizar a disposição interna do cabo", correct: false },
            { text: "Substituir a blindagem metálica do cabo", correct: false },
            { text: "Atuar como estrutura mecânica para dissipação térmica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual é a principal função da capa externa estriada no cabo GTS Cat6?",
        answers: [
            { text: "Aumentar a aderência no manuseio e reduzir o atrito durante a instalação", correct: true },
            { text: "Aumentar a aderência no manuseio e reduzir o esforço durante a instalação", correct: false },
            { text: "Aumentar a blindagem eletromagnética", correct: false },
            { text: "Auxiliar na dissipação de calor em aplicações PoE", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual é a implicação de o cabo ser classificado como PVC CM?",
        answers: [
            { text: "Retardância à chama adequada para instalações internas verticais e horizontais", correct: true },
            { text: "Retardância à chama adequada para instalações internas em ambientes controlados", correct: false },
            { text: "Blindagem metálica total em cada par", correct: false },
            { text: "Uso exclusivo para ambientes submarinos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Por que o cobre eletrolítico virgem sólido 24 AWG é fundamental para aplicações PoE?",
        answers: [
            { text: "Reduz perdas por resistência elétrica e aquecimento", correct: true },
            { text: "Reduz perdas elétricas e melhora a condução de corrente contínua", correct: false },
            { text: "Permite maior velocidade de transmissão", correct: false },
            { text: "Aumenta a resistência do cabo à radiação ultravioleta", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual parâmetro elétrico indica a compatibilidade do cabo com a categoria Cat6?",
        answers: [
            { text: "Capacidade de transmissão de até 250 MHz", correct: true },
            { text: "Capacidade de transmissão de sinais em frequências mais elevadas", correct: false },
            { text: "Resistência à tração de 400 N", correct: false },
            { text: "Espessura total da capa externa do cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual é a função do isolamento em polietileno de alta densidade (PEAD)?",
        answers: [
            { text: "Garantir estabilidade dielétrica e isolamento elétrico dos pares", correct: true },
            { text: "Garantir estabilidade dielétrica e separação elétrica entre os condutores", correct: false },
            { text: "Substituir a cruzeta central", correct: false },
            { text: "Blindar o cabo contra ruídos eletromagnéticos externos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Por que o raio mínimo de curvatura sem tensão é definido como 4 vezes o diâmetro do cabo?",
        answers: [
            { text: "Para evitar deformação da cruzeta e degradação do desempenho elétrico", correct: true },
            { text: "Para evitar deformações da estrutura interna e perda de desempenho elétrico", correct: false },
            { text: "Para reduzir o peso total do cabo", correct: false },
            { text: "Para melhorar a estética visual da instalação final", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "O que garante a conformidade do cabo GTS Cat6 com a norma EIA/TIA 568.2-D?",
        answers: [
            { text: "Compatibilidade com sistemas de cabeamento estruturado Cat6", correct: true },
            { text: "Compatibilidade com requisitos técnicos para cabeamento estruturado Cat6", correct: false },
            { text: "Imunidade total a surtos elétricos", correct: false },
            { text: "Garantia automática de fornecimento de potência PoE", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Por que o cabo GTS Cat6 é superior ao Cat5e em ambientes corporativos?",
        answers: [
            { text: "Maior largura de banda e melhor controle de ruído", correct: true },
            { text: "Maior largura de banda e melhor desempenho em altas frequências", correct: false },
            { text: "Maior espessura da capa externa", correct: false },
            { text: "Maior resistência mecânica geral do cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual é a principal função da primeira capa interna em PVC emborrachado (Dencher)?",
        answers: [
            { text: "Absorver impactos e aumentar a resistência mecânica do cabo", correct: true },
            { text: "Absorver impactos e facilitar o posicionamento do cabo na instalação", correct: false },
            { text: "Substituir a blindagem eletromagnética FTP", correct: false },
            { text: "Permitir aterramento do cabo em sistemas elétricos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Por que o cabo Hard&Soft Gigamax possui dupla capa?",
        answers: [
            { text: "Para amortecer impactos, resistir ao tempo e facilitar a instalação", correct: true },
            { text: "Para amortecer impactos e melhorar a organização interna dos condutores", correct: false },
            { text: "Para substituir a blindagem metálica", correct: false },
            { text: "Para transformar o cabo automaticamente em categoria Cat6", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual é o papel das estrias na capa externa?",
        answers: [
            { text: "Aumentar aderência e reduzir atrito no puxamento", correct: true },
            { text: "Aumentar aderência e facilitar o lançamento do cabo em eletrodutos", correct: false },
            { text: "Aumentar a potência PoE", correct: false },
            { text: "Criar blindagem magnética ao redor do cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Por que o Hard&Soft é considerado um Cat5e \"TRUE 100 MHz\"?",
        answers: [
            { text: "Porque garante largura de banda plena de 100 MHz com cobre virgem sólido", correct: true },
            { text: "Porque garante operação estável em frequências elevadas de transmissão", correct: false },
            { text: "Porque possui cruzeta interna", correct: false },
            { text: "Porque possui blindagem metálica total", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual vantagem o PVC emborrachado interno traz em obras?",
        answers: [
            { text: "Absorção de impacto e maior tolerância a tração", correct: true },
            { text: "Absorção de impacto e melhor acomodação do cabo em dutos", correct: false },
            { text: "Maior potência PoE", correct: false },
            { text: "Compatibilidade direta com padrões de cabeamento Cat6A", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Por que o Hard&Soft é mais indicado para ambientes agressivos que Cat5e comuns?",
        answers: [
            { text: "Porque tem dupla capa, maior resistência mecânica e proteção UV", correct: true },
            { text: "Porque possui dupla capa e maior robustez estrutural externa", correct: false },
            { text: "Porque é blindado FTP", correct: false },
            { text: "Porque suporta transmissão óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Por que a temperatura operacional de -10°C a 60°C é importante?",
        answers: [
            { text: "Permite uso em ambientes externos e internos", correct: true },
            { text: "Permite operação do cabo em diferentes condições climáticas", correct: false },
            { text: "Permite transmissão de dados em 10 Gbps", correct: false },
            { text: "Permite instalação em ambientes submarinos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual o benefício das gravações métricas a cada 1 metro no cabo?",
        answers: [
            { text: "Controle preciso de metragem durante a instalação", correct: true },
            { text: "Controle preciso da metragem utilizada ao longo da instalação", correct: false },
            { text: "Melhora da impedância elétrica", correct: false },
            { text: "Maior largura de banda de transmissão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Por que a embalagem em carretel MDF de 1000 m é relevante para grandes obras?",
        answers: [
            { text: "Reduz emendas e perdas durante a instalação", correct: true },
            { text: "Reduz emendas e facilita o controle logístico da instalação", correct: false },
            { text: "Aumenta a blindagem eletromagnética do cabo", correct: false },
            { text: "Reduz interferência eletromagnética externa", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "O que identifica corretamente o conector macho RJ-45 Cat5e com código 41-045?",
        answers: [
            { text: "Conector macho RJ-45 adequado ao padrão Cat5e para crimpagem em cabos de rede", correct: true },
            { text: "Conector macho RJ-45 projetado para aplicações genéricas em redes estruturadas", correct: false }, // tamanho próximo
            { text: "Conector fêmea RJ-45 para painéis de parede", correct: false }, // menor
            { text: "Adaptador de conexão para sistemas coaxiais e aplicações analógicas legadas", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Qual é a composição dos contatos elétricos do conector RJ-45 Cat5e 41-045?",
        answers: [
            { text: "Contatos com tripla camada: 50 mícrons de ouro sobre 100 mícrons de prata sobre base de bronze fosfórico", correct: true },
            { text: "Contatos com múltiplas camadas metálicas para aumento da durabilidade elétrica", correct: false }, // próximo
            { text: "Contatos de cobre nu sem revestimento externo", correct: false }, // menor
            { text: "Contatos metálicos reforçados com ligas industriais para uso geral em conectores", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Qual a vantagem de ter ouro sobre prata nos contatos do conector RJ-45?",
        answers: [
            { text: "Aumenta a durabilidade e melhora a condutividade elétrica ao longo do tempo", correct: true },
            { text: "Melhora a estabilidade elétrica e reduz a degradação dos contatos metálicos", correct: false }, // próximo
            { text: "Permite uso exclusivo em aplicações PoE++", correct: false }, // menor
            { text: "Garante compatibilidade automática com padrões ópticos e industriais", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Com qual padrão de cabeamento o conector RJ-45 Cat5e é compatível?",
        answers: [
            { text: "Padrão Cat5e para redes Ethernet até 1 Gbps", correct: true },
            { text: "Padrão Cat5e utilizado em infraestruturas de cabeamento estruturado", correct: false }, // próximo
            { text: "Padrão Cat6A para 10 Gbps", correct: false }, // menor
            { text: "Padrão proprietário para redes de alta velocidade fora das normas Ethernet", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "O conector RJ-45 Cat5e 41-045 pode ser usado para qual das seguintes aplicações?",
        answers: [
            { text: "Voice, dados e vídeo em redes estruturadas até 1 Gbps", correct: true },
            { text: "Transmissão de dados em redes cabeadas convencionais de baixa e média demanda", correct: false }, // próximo
            { text: "Transmissão direta de sinais de fibra óptica", correct: false }, // menor
            { text: "Distribuição de sinais elétricos e automação industrial de alta potência", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Para qual processo de montagem o conector RJ-45 Cat5e é mais utilizado?",
        answers: [
            { text: "Crimpagem em cabo UTP com alicate apropriado", correct: true },
            { text: "Crimpagem manual em cabos de par trançado para redes estruturadas", correct: false }, // próximo
            { text: "Soldagem direta dos fios aos contatos", correct: false }, // menor
            { text: "Fixação por pressão mecânica sem uso de ferramentas específicas", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual vantagem um conector Cat6 tem sobre um Cat5e?",
        answers: [
            { text: "Maior capacidade de desempenho elétrico com menor crosstalk e interferências", correct: true },
            { text: "Maior capacidade de desempenho elétrico com foco em aplicações convencionais", correct: false }, // tamanho próximo
            { text: "Capacidade de transmitir sinais ópticos sem conversores", correct: false }, // menor
            { text: "Transforma a estrutura física do cabo para eliminar interferências externas", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual é a composição dos contatos elétricos do conector RJ-45 Cat6 41-055?",
        answers: [
            { text: "Contatos com tripla camada: 50 mícrons de ouro sobre 100 mícrons de prata sobre base de bronze fosfórico", correct: true },
            { text: "Contatos com múltiplas camadas metálicas voltadas à durabilidade elétrica", correct: false }, // próximo
            { text: "Contatos de cobre nu sem revestimento externo", correct: false }, // menor
            { text: "Contatos metálicos reforçados com ligas industriais para uso genérico", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "O conector macho RJ-45 Cat6 41-055 ultrapassa quais padrões de desempenho?",
        answers: [
            { text: "Excede os requerimentos EIA/TIA-568 de performance elétrica", correct: true },
            { text: "Atende parâmetros técnicos superiores aos padrões básicos de cabeamento", correct: false }, // próximo
            { text: "Está certificado para fibra óptica monomodo", correct: false }, // menor
            { text: "Inclui processamento interno de sinal para amplificação Ethernet", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual material caracteriza o corpo do conector Cat6 41-055?",
        answers: [
            { text: "Termoplástico de alto impacto com precisão dimensional", correct: true },
            { text: "Termoplástico técnico moldado para aplicações estruturadas de rede", correct: false }, // próximo
            { text: "Metal fundido com cobertura de PVC flexível", correct: false }, // menor
            { text: "Composto elastomérico com propriedades antiestáticas e reforço mecânico", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual característica estrutural é mencionada para o conector Cat6 41-055?",
        answers: [
            { text: "Trava com grande resistência, garantindo encaixe firme", correct: true },
            { text: "Sistema de trava reforçada para maior estabilidade mecânica na conexão", correct: false }, // próximo
            { text: "Contatos soldáveis sem necessidade de crimpagem", correct: false }, // menor
            { text: "Blindagem integral com malha metálica contínua ao redor do conector", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "O conector Cat6 41-055 é projetado para quais níveis de rede?",
        answers: [
            { text: "Redes Fast Ethernet (100 Mbps) e Gigabit Ethernet (1000 Mbps)", correct: true },
            { text: "Redes Ethernet cabeadas com requisitos padrão de desempenho", correct: false }, // próximo
            { text: "Somente redes analógicas de voz", correct: false }, // menor
            { text: "Circuitos dedicados à alimentação elétrica de equipamentos ativos", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Em qual tipo de instalação o conector Cat6 41-055 é mais indicado que o Cat5e?",
        answers: [
            { text: "Ambientes com tráfego maior e maiores exigências de desempenho de sinal", correct: true },
            { text: "Ambientes corporativos com maior demanda por estabilidade de transmissão", correct: false }, // próximo
            { text: "Instalações exclusivas de telefonia analógica", correct: false }, // menor
            { text: "Sistemas de transmissão sem fio baseados em radiofrequência", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual das seguintes aplicações representa uso inadequado para o conector Cat6 41-055?",
        answers: [
            { text: "Em um cabo coaxial de TV sem adaptador", correct: true },
            { text: "Aplicação em sistemas que utilizam cabos não compatíveis com RJ-45", correct: false }, // próximo
            { text: "Em montagem de patch cord Gigabit", correct: false }, // menor
            { text: "Em infraestrutura de rede estruturada baseada em cabeamento Cat6", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "O que diferencia o conector 41-065 de um conector RJ-45 Cat6 comum?",
        answers: [
            { text: "A presença de blindagem metálica para proteção contra interferências eletromagnéticas", correct: true },
            { text: "A presença de estrutura metálica voltada à redução de ruídos externos", correct: false }, // próximo
            { text: "A redução do número de vias elétricas internas", correct: false }, // menor
            { text: "A modificação estrutural do conector para aplicações não padronizadas", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "A qual categoria de cabeamento estruturado o conector macho blindado 41-065 pertence?",
        answers: [
            { text: "Categoria 6 (Cat6)", correct: true },
            { text: "Categoria 6 utilizada em sistemas de cabeamento estruturado", correct: false }, // próximo
            { text: "Categoria 5e com tolerância estendida", correct: false }, // menor
            { text: "Categoria proprietária desenvolvida para aplicações industriais específicas", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual norma técnica de cabeamento este conector atende ou excede?",
        answers: [
            { text: "EIA/TIA-568", correct: true },
            { text: "Normas técnicas de cabeamento aplicadas a redes estruturadas modernas", correct: false }, // próximo
            { text: "IEEE 1394 FireWire", correct: false }, // menor
            { text: "Padrões proprietários de infraestrutura elétrica de alta complexidade", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual é a principal função da blindagem metálica no conector RJ-45 Cat6 41-065?",
        answers: [
            { text: "Reduzir interferências eletromagnéticas e melhorar a integridade do sinal", correct: true },
            { text: "Reduzir ruídos externos e contribuir para maior estabilidade de transmissão", correct: false }, // próximo
            { text: "Aumentar a flexibilidade mecânica do cabo", correct: false }, // menor
            { text: "Permitir transmissão de energia elétrica em níveis industriais elevados", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Em qual tipo de ambiente o uso de um conector RJ-45 blindado é mais recomendado?",
        answers: [
            { text: "Ambientes industriais ou com alto nível de interferência elétrica", correct: true },
            { text: "Ambientes técnicos com maior exposição a ruídos eletromagnéticos", correct: false }, // próximo
            { text: "Ambientes exclusivamente residenciais", correct: false }, // menor
            { text: "Instalações sem cabeamento físico estruturado", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "O termo STP associado ao conector blindado indica o quê?",
        answers: [
            { text: "Shielded Twisted Pair, indicando uso com cabos blindados", correct: true },
            { text: "Shielded Twisted Pair aplicado a sistemas de cabeamento estruturado", correct: false }, // próximo
            { text: "Simple Twisted Pair", correct: false }, // menor
            { text: "Sistema de terminação protegido sem padrão elétrico definido", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Quais velocidades de transmissão o conector macho blindado Cat6 é projetado para suportar?",
        answers: [
            { text: "Fast Ethernet (100 Mbps) e Gigabit Ethernet (1000 Mbps)", correct: true },
            { text: "Transmissões Ethernet cabeadas em aplicações convencionais de rede", correct: false }, // próximo
            { text: "Apenas 10 Mbps", correct: false }, // menor
            { text: "Transmissões dedicadas a sinais analógicos e controle industrial", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual é a composição correta dos contatos do conector macho blindado RJ-45 Cat6?",
        answers: [
            { text: "Tripla camada: ouro, prata e base de bronze fosfórico", correct: true },
            { text: "Camadas metálicas combinadas para maior durabilidade e desempenho elétrico", correct: false }, // próximo
            { text: "Cobre nu sem revestimento", correct: false }, // menor
            { text: "Ligas metálicas genéricas aplicadas a conectores industriais", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual é o papel do bronze fosfórico na base dos contatos?",
        answers: [
            { text: "Garantir resistência mecânica e estabilidade elétrica", correct: true },
            { text: "Conferir estabilidade estrutural e suporte elétrico aos contatos", correct: false }, // próximo
            { text: "Atuar como isolante térmico", correct: false }, // menor
            { text: "Substituir o revestimento de ouro na superfície de contato", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "O uso de corpo metálico no conector exige atenção a qual aspecto da instalação?",
        answers: [
            { text: "Aterramento adequado da blindagem", correct: true },
            { text: "A correta integração da blindagem ao sistema de aterramento da rede", correct: false }, // próximo
            { text: "Uso obrigatório de cabos UTP", correct: false }, // menor
            { text: "Eliminação do padrão de pinagem T568 na instalação", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual ferramenta é necessária para a instalação correta do conector macho blindado RJ-45 Cat6?",
        answers: [
            { text: "Alicate de crimpagem compatível com conectores RJ-45 blindados", correct: true },
            { text: "Ferramenta de crimpagem adequada para conectores metálicos RJ-45", correct: false }, // próximo
            { text: "Ferro de solda", correct: false }, // menor
            { text: "Equipamento hidráulico para compressão de terminais industriais", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual aplicação justifica o uso do conector macho blindado Cat6 em vez de um não blindado?",
        answers: [
            { text: "Ambientes com motores, máquinas ou cabos de energia próximos", correct: true },
            { text: "Ambientes técnicos com elevada presença de ruídos eletromagnéticos", correct: false }, // próximo
            { text: "Ambientes domésticos simples", correct: false }, // menor
            { text: "Redes temporárias de baixa criticidade operacional", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual das opções representa um uso inadequado para o conector RJ-45 blindado Cat6?",
        answers: [
            { text: "Crimpagem em cabos coaxiais de TV", correct: true },
            { text: "Aplicação em sistemas que não utilizam cabos de par trançado", correct: false }, // próximo
            { text: "Patch cords industriais", correct: false }, // menor
            { text: "Instalações corporativas com infraestrutura de rede estruturada", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual tipo de cabo é indicado para uso com este conector RJ45 Tooless?",
        answers: [
            { text: "Cabos de par trançado não blindado (UTP)", correct: true },
            { text: "Cabos de par trançado com isolamento padrão para redes estruturadas", correct: false },
            { text: "Cabos coaxiais adaptados para redes Ethernet", correct: false },
            { text: "Cabos de fibra óptica multimodo com conversor passivo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual a velocidade máxima de transmissão suportada pelo Conector RJ45 Cat6 Tooless?",
        answers: [
            { text: "Até 1 Gbps, ideal para aplicações que exigem alta performance e estabilidade", correct: true },
            { text: "Até 1 Gbps em aplicações típicas de redes corporativas estruturadas", correct: false },
            { text: "Até 100 Mbps com baixa latência garantida", correct: false },
            { text: "Velocidade variável dependente do tipo de crimpagem manual", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "O desempenho elétrico dos contatos do conector excede qual norma técnica?",
        answers: [
            { text: "EIA/TIA-568", correct: true },
            { text: "EIA/TIA-568 aplicada a sistemas de cabeamento estruturado", correct: false },
            { text: "IEEE 802.3an para 10GBASE-T", correct: false },
            { text: "ANSI/TIA-942 para data centers Tier IV", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual é a principal vantagem do sistema Tooless presente neste conector?",
        answers: [
            { text: "Dispensa o uso de ferramentas de crimpagem, tornando a instalação mais rápida e simples", correct: true },
            { text: "Dispensa o uso de ferramentas de crimpagem durante o processo de montagem", correct: false },
            { text: "Elimina a necessidade de padrão de pinagem T568A ou T568B", correct: false },
            { text: "Substitui completamente o uso de patch panels em redes estruturadas", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual componente interno auxilia na correta organização dos fios durante a montagem?",
        answers: [
            { text: "Suporte IDC com guias de contato no padrão T568", correct: true },
            { text: "Suporte interno com guias para organização dos condutores", correct: false },
            { text: "Bloco de terminação por parafuso ajustável", correct: false },
            { text: "Conector modular com contatos autoajustáveis por pressão axial", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual o comprimento recomendado para a decapagem dos fios condutores antes da montagem?",
        answers: [
            { text: "2 cm", correct: true },
            { text: "2 cm para acomodação adequada dos condutores no conector", correct: false },
            { text: "3,5 cm para melhor acomodação no suporte IDC", correct: false },
            { text: "Comprimento variável conforme o diâmetro do cabo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Após posicionar os fios no suporte IDC, qual é a etapa seguinte correta?",
        answers: [
            { text: "Recortar o excesso dos fios condutores", correct: true },
            { text: "Recortar o excesso dos fios para finalizar a acomodação interna", correct: false },
            { text: "Aplicar pressão com alicate de crimpagem", correct: false },
            { text: "Inserir resina isolante para proteção elétrica", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Como é realizada a fixação final do cabo no conector?",
        answers: [
            { text: "Pressionando as tampas plásticas e rosqueando o pino na base do conector", correct: true },
            { text: "Pressionando as tampas plásticas para travamento mecânico do conjunto", correct: false },
            { text: "Utilizando presilhas externas de nylon", correct: false },
            { text: "Por compressão térmica do corpo plástico", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual material é utilizado no corpo plástico do conector RJ45 Cat6 Tooless?",
        answers: [
            { text: "Termoplástico NEW PC de alta resistência elétrica", correct: true },
            { text: "Termoplástico PC com características isolantes para aplicações de rede", correct: false },
            { text: "Nylon reforçado com fibra de vidro", correct: false },
            { text: "PVC flexível com proteção UV", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual é a composição das camadas metálicas dos contatos do conector?",
        answers: [
            { text: "50 mícrons de ouro sobre 100 mícrons de prata sobre base de bronze fosfórico", correct: true },
            { text: "Camadas de ouro e prata aplicadas sobre base metálica condutiva", correct: false },
            { text: "Prata pura com núcleo de cobre estanhado", correct: false },
            { text: "Ouro eletrolítico direto sobre aço inoxidável", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual benefício direto o uso de bronze fosfórico na base dos contatos proporciona?",
        answers: [
            { text: "Maior desempenho elétrico e durabilidade do conector", correct: true },
            { text: "Maior desempenho elétrico e estabilidade mecânica dos contatos", correct: false },
            { text: "Flexibilidade mecânica para aplicações móveis", correct: false },
            { text: "Compatibilidade exclusiva com cabos blindados", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Em quais tipos de ambiente este conector pode ser utilizado?",
        answers: [
            { text: "Ambientes residenciais e comerciais", correct: true },
            { text: "Ambientes residenciais e comerciais de redes estruturadas", correct: false },
            { text: "Somente data centers certificados Tier III ou IV", correct: false },
            { text: "Exclusivamente instalações externas subterrâneas", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Com qual categoria de cabeamento estruturado este Keystone Jack é compatível?",
        answers: [
            { text: "Categoria 5e (Cat5e)", correct: true },
            { text: "Categoria 5e utilizada em sistemas de cabeamento estruturado", correct: false },
            { text: "Categoria 6A com suporte a 10 Gbps", correct: false },
            { text: "Categoria 7 com conectores GG45", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Qual velocidade de rede é tipicamente suportada por um Keystone Jack Cat5e corretamente instalado?",
        answers: [
            { text: "Até 1 Gbps em enlaces Ethernet padrão", correct: true },
            { text: "Até 1 Gbps em enlaces Ethernet de redes estruturadas", correct: false },
            { text: "Limitado a 100 Mbps por definição da categoria", correct: false },
            { text: "Velocidade variável dependendo da cor do conector", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Por que este produto é classificado como um conector fêmea RJ-45?",
        answers: [
            { text: "Porque recebe plugs RJ-45 macho para conexão de equipamentos ou patch cords", correct: true },
            { text: "Porque recebe conectores RJ-45 macho para interligação de cabos de rede", correct: false },
            { text: "Porque possui pinos expostos para crimpagem direta", correct: false },
            { text: "Porque substitui conectores macho em patch cords", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Quantas vias elétricas estão presentes em um conector RJ-45 Cat5e padrão?",
        answers: [
            { text: "8 vias (8P8C)", correct: true },
            { text: "8 vias elétricas utilizadas em conectores padrão de rede", correct: false },
            { text: "6 vias com duas reservas mecânicas", correct: false },
            { text: "10 vias para compatibilidade futura", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Qual característica dos contatos metálicos contribui diretamente para a qualidade da transmissão de dados?",
        answers: [
            { text: "Revestimento metálico que reduz oxidação e melhora a condutividade", correct: true },
            { text: "Revestimento metálico aplicado para garantir estabilidade elétrica", correct: false },
            { text: "Espessura elevada do corpo plástico", correct: false },
            { text: "Uso de silicone isolante nos pinos", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Por que o corpo do Keystone Jack é fabricado em material termoplástico?",
        answers: [
            { text: "Para garantir isolamento elétrico, resistência mecânica e durabilidade", correct: true },
            { text: "Para garantir isolamento elétrico e resistência mecânica ao conjunto", correct: false },
            { text: "Para facilitar a dissipação térmica ativa", correct: false },
            { text: "Para funcionar como blindagem eletromagnética", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Onde este Keystone Jack RJ-45 Cat5e pode ser instalado?",
        answers: [
            { text: "Em faceplates, painéis de patch, caixas de superfície e racks", correct: true },
            { text: "Em faceplates e painéis modulares de redes estruturadas", correct: false },
            { text: "Apenas em switches gerenciáveis", correct: false },
            { text: "Exclusivamente em ambientes externos subterrâneos", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Qual é a principal vantagem do padrão Keystone em instalações de rede?",
        answers: [
            { text: "Facilidade de substituição, modularidade e padronização", correct: true },
            { text: "Facilidade de substituição e padronização em sistemas de rede", correct: false },
            { text: "Aumento automático da velocidade da rede", correct: false },
            { text: "Eliminação total de interferência eletromagnética", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Por que a cor preta pode ser vantajosa em determinadas instalações de rede?",
        answers: [
            { text: "Porque combina com racks, painéis e ambientes corporativos escuros", correct: true },
            { text: "Porque combina visualmente com racks e painéis de redes estruturadas", correct: false },
            { text: "Porque melhora a condutividade elétrica do conector", correct: false },
            { text: "Porque indica suporte nativo a PoE++", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Por que a correta terminação do cabo é essencial ao usar um Keystone Jack Cat5e?",
        answers: [
            { text: "Para garantir desempenho, reduzir perdas e evitar erros de conexão", correct: true },
            { text: "Para garantir desempenho e reduzir falhas na comunicação de dados", correct: false },
            { text: "Apenas para fins estéticos da instalação", correct: false },
            { text: "Para permitir funcionamento sem padrão de pinagem", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Qual é a principal finalidade do Keystone Jack RJ-45 Cat6?",
        answers: [
            { text: "Permitir terminação e conexão de cabos de rede Cat6 em painéis, tomadas e adaptadores modulares", correct: true },
            { text: "Permitir terminação e conexão de cabos de rede em painéis e módulos estruturados", correct: false },
            { text: "Servir como repetidor ativo de sinal Ethernet até 100 metros", correct: false },
            { text: "Realizar controle e gerenciamento de potência PoE nos dispositivos finais", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Qual tipo de conector é este Keystone Jack Cat6?",
        answers: [
            { text: "Conector fêmea RJ45 8 vias padrão Cat6", correct: true },
            { text: "Conector fêmea RJ45 8 vias para aplicações de rede estruturada", correct: false },
            { text: "Adaptador USB para conexão de rede Ethernet", correct: false },
            { text: "Terminal coaxial BNC utilizado em sistemas de vídeo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Quais materiais compõem a tripla camada dos contatos elétricos do Keystone Jack Cat6?",
        answers: [
            { text: "Bronze fosfórico, prata e ouro, oferecendo bom desempenho elétrico", correct: true },
            { text: "Bronze fosfórico, prata e ouro aplicados para condução elétrica", correct: false },
            { text: "Cobre nu revestido apenas com verniz isolante", correct: false },
            { text: "Ligas metálicas especiais com aditivos condutivos sintéticos", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Este Keystone Jack Cat6 é compatível com qual padrão de cabeamento estruturado?",
        answers: [
            { text: "Categoria 6 conforme as especificações de redes Ethernet até 1 Gbps", correct: true },
            { text: "Categoria 6 conforme requisitos básicos de redes estruturadas", correct: false },
            { text: "Exclusivamente com cabos de fibra óptica multimodo", correct: false },
            { text: "Somente com conexões coaxiais do tipo RG-6", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Qual a vantagem de ter um Keystone Jack Cat6 em uma infraestrutura de rede?",
        answers: [
            { text: "Permite manter a organização da rede e facilitar trocas de módulos em painéis e placas", correct: true },
            { text: "Permite manter a organização da rede e facilitar alterações na infraestrutura", correct: false },
            { text: "Amplifica o sinal de rede para longas distâncias sem repetidor", correct: false },
            { text: "Substitui completamente a necessidade de cabos de backbone", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Como o Keystone Jack Cat6 normalmente é instalado em uma infraestrutura de rede?",
        answers: [
            { text: "Inserido na abertura padrão Keystone de painéis, faceplates e caixas modulares", correct: true },
            { text: "Inserido na abertura padrão Keystone de painéis e placas modulares", correct: false },
            { text: "Fixado com parafusos metálicos e isolamento de borracha", correct: false },
            { text: "Conectado por meio de adaptador DB-25 externo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "O que a presença de uma placa de circuito impresso moderna neste Keystone Jack indica?",
        answers: [
            { text: "Maior estabilidade e melhor desempenho na transmissão de dados", correct: true },
            { text: "Maior estabilidade e controle elétrico durante a transmissão", correct: false },
            { text: "Presença de amplificadores ativos de sinal integrados", correct: false },
            { text: "Funcionamento adicional como ponto de acesso sem fio", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Quais tipos de ambiente este Keystone Jack Cat6 é mais adequado?",
        answers: [
            { text: "Redes residenciais, comerciais e corporativas com cabeamento estruturado Cat6", correct: true },
            { text: "Redes residenciais, comerciais e corporativas de cabeamento estruturado", correct: false },
            { text: "Sistemas analógicos legados de telecomunicação", correct: false },
            { text: "Redes industriais exclusivamente baseadas em fibra óptica ativa", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Qual é a principal função do Alicate de Inserção IDC 110?",
        answers: [
            { text: "Inserir e cortar fios em blocos IDC 110 de patch panels e keystones", correct: true },
            { text: "Inserir e fixar fios em blocos de terminação usados em redes estruturadas", correct: false }, // próximo
            { text: "Crimpar terminais RJ-45 diretamente sem corte de fios", correct: false }, // menor
            { text: "Realizar múltiplas funções elétricas em sistemas ativos de comunicação", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "O termo “IDC 110” está relacionado principalmente a qual característica?",
        answers: [
            { text: "Tipo de bloco de terminação e lâmina compatível usada para inserir fios em conexões", correct: true },
            { text: "Tipo de sistema de terminação utilizado em blocos de conexão de redes", correct: false }, // próximo
            { text: "Norma de velocidade de transmissão de 1 Gbps", correct: false }, // menor
            { text: "Classificação estrutural aplicada a conectores especiais de telecomunicações", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Por que o Alicate de Inserção IDC 110 é considerado uma ferramenta Punch Down?",
        answers: [
            { text: "Porque utiliza impacto para inserir o fio nos terminais e cortar o excesso", correct: true },
            { text: "Porque aplica força controlada para acomodar o fio nos contatos metálicos", correct: false }, // próximo
            { text: "Porque utiliza laser para fixar o fio", correct: false }, // menor
            { text: "Porque realiza perfuração mecânica contínua em terminais industriais", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Como ocorre o corte do fio durante a utilização do alicate?",
        answers: [
            { text: "A lâmina corta o excesso após o fio ser inserido no bloco IDC", correct: true },
            { text: "O excesso do fio é removido mecanicamente após a inserção no terminal", correct: false }, // próximo
            { text: "O fio é fundido por calor", correct: false }, // menor
            { text: "O corte ocorre por pressão térmica controlada eletronicamente", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Que tipo de bloco de terminação este alicate foi projetado para trabalhar?",
        answers: [
            { text: "Blocos IDC 110 usados em keystones e patch panels RJ-45", correct: true },
            { text: "Blocos de terminação aplicados em sistemas de cabeamento estruturado", correct: false }, // próximo
            { text: "Blocos para fibra óptica monomodo", correct: false }, // menor
            { text: "Conectores industriais de alta potência elétrica", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "O que significa dizer que a lâmina do alicate é removível?",
        answers: [
            { text: "Pode ser retirada e substituída quando estiver gasta ou por outro tipo compatível", correct: true },
            { text: "Permite a substituição da lâmina para manter a eficiência da ferramenta", correct: false }, // próximo
            { text: "Pode ser estendida para medição do cabo", correct: false }, // menor
            { text: "Permite alteração automática do padrão de terminação elétrica", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Qual recurso comum em ferramentas Punch Down ajuda a regular a força aplicada?",
        answers: [
            { text: "Impacto ajustável", correct: true },
            { text: "Sistema de ajuste mecânico da força de inserção", correct: false }, // próximo
            { text: "Diagnóstico automático de rede", correct: false }, // menor
            { text: "Comunicação sem fio integrada à ferramenta", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Para que serve o compartimento localizado na parte posterior do alicate?",
        answers: [
            { text: "Armazenar lâmina sobressalente", correct: true },
            { text: "Guardar componentes auxiliares utilizados durante a instalação", correct: false }, // próximo
            { text: "Travar cabos durante medição", correct: false }, // menor
            { text: "Abrigar sistema eletrônico de controle de impacto", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Em qual ambiente essa ferramenta é mais frequentemente utilizada?",
        answers: [
            { text: "Instalações de cabeamento estruturado e montagem de painéis de rede", correct: true },
            { text: "Ambientes técnicos voltados à implantação de infraestrutura de rede", correct: false }, // próximo
            { text: "Ajuste de antenas RF", correct: false }, // menor
            { text: "Instalações elétricas de alta tensão industrial", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Qual é a principal vantagem de um cabo anatômico em um alicate de inserção?",
        answers: [
            { text: "Maior conforto e controle durante o uso prolongado", correct: true },
            { text: "Melhor ergonomia para reduzir fadiga em operações contínuas", correct: false }, // próximo
            { text: "Maior capacidade de crimpagem", correct: false }, // menor
            { text: "Integração direta com sistemas automatizados de rede", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Por que é importante que a lâmina seja compatível com o padrão IDC 110?",
        answers: [
            { text: "Para inserir corretamente o fio e realizar o corte sem danificar os terminais", correct: true },
            { text: "Para garantir a correta terminação dos fios nos blocos compatíveis", correct: false }, // próximo
            { text: "Para garantir transmissão óptica", correct: false }, // menor
            { text: "Para definir automaticamente o padrão de rede utilizado", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Qual é a principal finalidade do Alicate de Inserção para Telefonia Tipo Borgoa?",
        answers: [
            { text: "Inserir e cortar fios em blocos de terminação usados em sistemas de telefonia", correct: true },
            { text: "Inserir e fixar fios em blocos de conexão utilizados em sistemas telefônicos", correct: false }, // próximo
            { text: "Crimpar conectores RJ-45 em cabos de rede", correct: false }, // menor
            { text: "Realizar medições elétricas completas em infraestruturas de telecomunicações", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "O termo “Tipo Borgoa” está relacionado a quê?",
        answers: [
            { text: "Ao padrão de lâmina e ao tipo de bloco de terminação utilizado em telefonia", correct: true },
            { text: "Ao modelo de lâmina compatível com blocos tradicionais de sistemas telefônicos", correct: false }, // próximo
            { text: "A uma categoria de cabeamento de rede", correct: false }, // menor
            { text: "A um protocolo avançado de comunicação digital para redes híbridas", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Em quais sistemas o alicate Tipo Borgoa é mais comumente utilizado?",
        answers: [
            { text: "Sistemas de telefonia analógica e PABX", correct: true },
            { text: "Infraestruturas de telefonia tradicional e centrais PABX convencionais", correct: false }, // próximo
            { text: "Redes Ethernet Cat6A e Cat7", correct: false }, // menor
            { text: "Sistemas ópticos de alta capacidade para transmissão de dados", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Como o alicate Tipo Borgoa realiza a terminação dos fios?",
        answers: [
            { text: "Empurrando o fio para dentro do contato e cortando automaticamente o excesso", correct: true },
            { text: "Inserindo o fio no terminal metálico e removendo o excesso durante o impacto", correct: false }, // próximo
            { text: "Derretendo o isolamento do fio", correct: false }, // menor
            { text: "Fixando o fio por compressão mecânica contínua sem corte", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Por que este tipo de ferramenta é classificada como Punch Down?",
        answers: [
            { text: "Porque utiliza impacto para inserir e fixar o fio no contato metálico", correct: true },
            { text: "Porque aplica força de impacto controlada para acomodar o fio no terminal", correct: false }, // próximo
            { text: "Porque perfura o fio com broca interna", correct: false }, // menor
            { text: "Porque realiza prensagem hidráulica em terminais telefônicos", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Qual é a função principal da lâmina no alicate Tipo Borgoa?",
        answers: [
            { text: "Inserir o fio no terminal e cortar o excesso de forma precisa", correct: true },
            { text: "Realizar a inserção do fio no contato e eliminar o excesso automaticamente", correct: false }, // próximo
            { text: "Remover o isolamento do cabo", correct: false }, // menor
            { text: "Executar ajustes dimensionais no bloco de terminação", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Qual prática é recomendada ao utilizar o alicate Tipo Borgoa?",
        answers: [
            { text: "Garantir o posicionamento correto do fio antes do impacto", correct: true },
            { text: "Verificar o correto alinhamento do fio antes de aplicar a força de inserção", correct: false }, // próximo
            { text: "Aplicar força excessiva no impacto", correct: false }, // menor
            { text: "Utilizar a ferramenta como cortador universal", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Por que o alicate Tipo Borgoa não é indicado para redes de dados Ethernet?",
        answers: [
            { text: "Porque foi projetado para blocos de telefonia, não para IDC de redes", correct: true },
            { text: "Porque sua lâmina é compatível apenas com blocos usados em telefonia", correct: false }, // próximo
            { text: "Porque não suporta altas velocidades", correct: false }, // menor
            { text: "Porque exige conectores e padrões exclusivos de fibra óptica", correct: false } // maior
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual é a principal função do Alicate de Crimpar RJ11 / RJ45 código 21-030?",
        answers: [
            { text: "Realizar a crimpagem de conectores RJ11 e RJ45 em cabos de telefonia e rede", correct: true },
            { text: "Realizar a fixação de terminais metálicos em blocos de telefonia e dados", correct: false },
            { text: "Soldar conectores metálicos diretamente nos cabos", correct: false },
            { text: "Testar continuidade e certificação elétrica de redes estruturadas", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Por que este alicate é classificado como uma ferramenta de crimpagem?",
        answers: [
            { text: "Porque prensa mecanicamente os contatos do conector contra os condutores do cabo", correct: true },
            { text: "Porque prensa mecanicamente os terminais sobre os fios durante a montagem", correct: false },
            { text: "Porque corta e insere fios por impacto", correct: false },
            { text: "Porque realiza conexão sem contato físico", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Quais tipos de conectores podem ser crimados com este alicate?",
        answers: [
            { text: "Conectores RJ11 e RJ45", correct: true },
            { text: "Conectores RJ12 e RJ48 usados em sistemas digitais", correct: false },
            { text: "Conectores ópticos SC e LC", correct: false },
            { text: "Conectores USB-C e HDMI", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual é a principal vantagem do sistema de catraca presente neste alicate?",
        answers: [
            { text: "Garantir crimpagem completa e uniforme antes da liberação do alicate", correct: true },
            { text: "Garantir pressão total no conector antes da liberação da ferramenta", correct: false },
            { text: "Permitir uso sem aplicação de força manual", correct: false },
            { text: "Eliminar a necessidade de alinhamento do conector", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Por que a ergonomia é importante em ferramentas de crimpagem?",
        answers: [
            { text: "Porque a atividade envolve repetição de movimentos e aplicação de força manual", correct: true },
            { text: "Porque a atividade exige controle constante e esforço repetitivo do operador", correct: false },
            { text: "Porque influencia diretamente a velocidade da rede", correct: false },
            { text: "Porque define o padrão de pinagem do cabo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Por que a precisão mecânica é essencial em um alicate de crimpagem?",
        answers: [
            { text: "Para garantir que os contatos do conector perfurem corretamente os condutores", correct: true },
            { text: "Para garantir que os terminais atinjam corretamente os fios do cabo", correct: false },
            { text: "Para alterar automaticamente a impedância do cabo", correct: false },
            { text: "Para reduzir a quantidade de pares trançados", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Em quais tipos de instalação este alicate é mais utilizado?",
        answers: [
            { text: "Instalações de redes de dados e sistemas de telefonia", correct: true },
            { text: "Instalações de infraestrutura de telecomunicações e cabeamento interno", correct: false },
            { text: "Instalações de fibra óptica de longa distância", correct: false },
            { text: "Configuração de redes Wi-Fi sem fio", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual das situações abaixo representa um uso inadequado do alicate 21-030?",
        answers: [
            { text: "Crimpagem de conectores coaxiais de TV", correct: true },
            { text: "Crimpagem de conectores metálicos fora do padrão RJ", correct: false },
            { text: "Crimpagem de RJ45 em cabos de rede", correct: false },
            { text: "Montagem de patch cords", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual é a principal finalidade do Alicate de Crimpar profissional código 21-040?",
        answers: [
            { text: "Crimpar conectores RJ9, RJ11 e RJ45 em cabos de telefonia, redes e headsets", correct: true },
            { text: "Crimpar conectores modulares RJ em cabos de telefonia e comunicação de dados", correct: false },
            { text: "Inserir fios em blocos IDC 110 e Borgoa", correct: false },
            { text: "Certificar enlaces de rede com testes de desempenho", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Por que este alicate é classificado como profissional?",
        answers: [
            { text: "Porque possui sistema de catraca, construção robusta e maior precisão de crimpagem", correct: true },
            { text: "Porque possui mecanismo reforçado e melhor controle mecânico durante a crimpagem", correct: false },
            { text: "Porque funciona sem necessidade de força manual", correct: false },
            { text: "Porque é exclusivo para cabos blindados industriais", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Quais tipos de conectores podem ser corretamente crimados com o alicate 21-040?",
        answers: [
            { text: "RJ9, RJ11 e RJ45", correct: true },
            { text: "RJ9, RJ11 e conectores modulares de telefonia digital", correct: false },
            { text: "RJ45, BNC e F", correct: false },
            { text: "RJ9, HDMI e DisplayPort", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual é a principal diferença entre os conectores RJ9, RJ11 e RJ45?",
        answers: [
            { text: "Quantidade de vias e aplicações específicas em telefonia, headsets e redes", correct: true },
            { text: "Quantidade de vias e uso específico em sistemas de comunicação cabeada", correct: false },
            { text: "Presença obrigatória de blindagem metálica", correct: false },
            { text: "Uso exclusivo em redes de fibra óptica", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual é a principal função do sistema de catraca no alicate de crimpagem 21-040?",
        answers: [
            { text: "Garantir que a crimpagem só seja liberada após atingir a pressão correta", correct: true },
            { text: "Garantir que a ferramenta complete o ciclo antes da liberação da crimpagem", correct: false },
            { text: "Ajustar automaticamente o padrão de pinagem", correct: false },
            { text: "Permitir crimpagem sem posicionamento prévio do conector", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual característica do alicate melhora o conforto durante o uso prolongado?",
        answers: [
            { text: "Cabos ergonômicos projetados para melhor empunhadura", correct: true },
            { text: "Empunhadura anatômica que reduz fadiga durante longos períodos de uso", correct: false },
            { text: "Lâmina de corte aquecida", correct: false },
            { text: "Sistema de vibração assistida", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Por que a construção robusta é importante em um alicate de crimpagem profissional?",
        answers: [
            { text: "Porque a ferramenta sofre esforço mecânico repetitivo durante a crimpagem", correct: true },
            { text: "Porque a ferramenta é submetida a ciclos repetidos de pressão mecânica", correct: false },
            { text: "Porque permite uso em cabos ópticos", correct: false },
            { text: "Porque elimina a necessidade de conectores padronizados", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Em quais tipos de instalação o alicate 21-040 é mais indicado?",
        answers: [
            { text: "Telefonia, redes de dados e montagem de cabos de headset", correct: true },
            { text: "Instalações de comunicação cabeada e montagem de cabos de telecomunicações", correct: false },
            { text: "Backbones de fibra óptica monomodo", correct: false },
            { text: "Configuração de redes Wi-Fi sem fio", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual prática é essencial para garantir uma crimpagem correta com o alicate 21-040?",
        answers: [
            { text: "Posicionar corretamente os fios no conector antes de acionar a catraca", correct: true },
            { text: "Garantir o correto alinhamento dos condutores antes do acionamento da ferramenta", correct: false },
            { text: "Dobrar os fios para aumentar a área de contato", correct: false },
            { text: "Cortar o conector após a crimpagem", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual vantagem o alicate 21-040 tem em relação a um alicate que crimpa apenas RJ45?",
        answers: [
            { text: "Maior versatilidade para diferentes tipos de conectores e aplicações", correct: true },
            { text: "Maior flexibilidade de uso em diferentes cenários de telecomunicações", correct: false },
            { text: "Maior velocidade de transmissão de dados", correct: false },
            { text: "Compatibilidade automática com fibra óptica", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Qual é a principal função do Decapador de Cabo UTP 21-050?",
        answers: [
            { text: "Remover a capa externa de cabos de par trançado deixando os fios expostos no comprimento ideal para conectorização", correct: true },
            { text: "Remover a capa externa do cabo deixando os condutores prontos para montagem", correct: false },
            { text: "Cortar e crimpar conectores RJ-45 diretamente no cabo", correct: false },
            { text: "Aplicar blindagem metálica adicional ao cabo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Qual tipo de cabo é compatível com o Decapador 21-050?",
        answers: [
            { text: "Cabo UTP de rede (par trançado sem blindagem)", correct: true },
            { text: "Cabo de par trançado utilizado em redes de dados sem blindagem metálica", correct: false },
            { text: "Cabo coaxial RG-6", correct: false },
            { text: "Cabo elétrico de alta tensão", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Qual benefício o uso de um decapador especializado como o 21-050 oferece ao instalador?",
        answers: [
            { text: "Decapagem precisa e consistente que evita danos aos condutores internos", correct: true },
            { text: "Decapagem uniforme que reduz o risco de danificar os fios do cabo", correct: false },
            { text: "Aumento automático da velocidade da rede", correct: false },
            { text: "Amplificação de sinal sem equipamentos", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Por que decapar o cabo manualmente sem a ferramenta adequada pode ser problemático?",
        answers: [
            { text: "Porque pode danificar os fios internos e comprometer a qualidade da conexão", correct: true },
            { text: "Porque pode causar cortes irregulares que afetam o desempenho da ligação", correct: false },
            { text: "Porque transforma o cabo em STP", correct: false },
            { text: "Porque limita o cabo a 10 Mbps", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Qual cuidado ajuda a evitar danos aos fios ao usar o Decapador UTP 21-050?",
        answers: [
            { text: "Aplicar apenas a pressão necessária para remover a capa sem cortar os condutores", correct: true },
            { text: "Aplicar pressão controlada para retirar a capa sem atingir os fios internos", correct: false },
            { text: "Usar força máxima para garantir o corte", correct: false },
            { text: "Substituir a ferramenta por uma lâmina", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Qual é o passo essencial após a decapagem e antes da crimpagem?",
        answers: [
            { text: "Organizar e alinhar os pares de fios conforme o padrão de pinagem", correct: true },
            { text: "Organizar os condutores respeitando o padrão de montagem do conector", correct: false },
            { text: "Aplicar fita isolante nos fios", correct: false },
            { text: "Conectar o cabo diretamente ao switch", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Em qual etapa da instalação de um cabo de rede o decapador 21-050 é utilizado?",
        answers: [
            { text: "Antes da crimpagem do conector, para preparar os fios", correct: true },
            { text: "Na preparação do cabo antes da montagem do conector RJ-45", correct: false },
            { text: "Após a crimpagem para testar o enlace", correct: false },
            { text: "Com o cabo conectado ao equipamento ativo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual é a principal função de um patch cord de rede?",
        answers: [
            { text: "Interligar equipamentos de rede, como computadores, switches e roteadores", correct: true },
            { text: "Interligar dispositivos de rede em pontos próximos da infraestrutura", correct: false },
            { text: "Fornecer energia elétrica à porta PoE", correct: false },
            { text: "Atuar como cabo de fibra óptica em links de longa distância", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Que tipo de conectores este patch cord possui nas extremidades?",
        answers: [
            { text: "Conectores RJ45 macho Cat5e em ambas as extremidades", correct: true },
            { text: "Conectores RJ45 macho compatíveis com a categoria Cat5e", correct: false },
            { text: "Conectores USB-C para adaptação", correct: false },
            { text: "Conectores SC para fibra óptica", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Por que cores diferentes de patch cords são utilizadas em redes estruturadas?",
        answers: [
            { text: "Para facilitar a identificação e organização de diferentes segmentos de rede", correct: true },
            { text: "Para facilitar a organização visual e identificação lógica da rede", correct: false },
            { text: "Para aumentar a velocidade de transmissão", correct: false },
            { text: "Para indicar automaticamente o tipo de switch", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual principal vantagem de um patch cord pronto comparado a um cabo crimpado em campo?",
        answers: [
            { text: "Já vem testado e garante conectividade e continuidade elétrica", correct: true },
            { text: "Já vem montado e testado em fábrica garantindo funcionamento adequado", correct: false },
            { text: "Ajusta automaticamente o comprimento", correct: false },
            { text: "Elimina completamente interferências", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual é a principal aplicação de um patch cord Cat5e GTS?",
        answers: [
            { text: "Ligação de equipamentos próximos, como computador, switch ou roteador", correct: true },
            { text: "Ligação de dispositivos de rede em curtas distâncias", correct: false },
            { text: "Backbone de edifícios", correct: false },
            { text: "Conexões elétricas de alta potência", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual prática ajuda a aumentar a durabilidade de um patch cord?",
        answers: [
            { text: "Evitar dobras excessivas e tração constante no cabo", correct: true },
            { text: "Evitar esforços mecânicos excessivos e tensão contínua no cabo", correct: false },
            { text: "Remover a capa externa para inspeção", correct: false },
            { text: "Dobrar o cabo em ângulos de 90°", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual diferença fundamental existe entre Cat5e e Cat6 ao comparar patch cords?",
        answers: [
            { text: "Cat6 possui requisitos de desempenho elétrico mais rigorosos e melhor controle de interferências", correct: true },
            { text: "Cat6 possui especificações elétricas mais rígidas e menor sensibilidade a ruídos", correct: false },
            { text: "Cat5e suporta 10 Gbps em qualquer distância", correct: false },
            { text: "Cat6 não utiliza conectores RJ45", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "O que caracteriza corretamente o produto Patch Cord Cat6 GTS?",
        answers: [
            { text: "Cabo de rede pronto para uso, com conectores RJ45 em ambas as extremidades", correct: true },
            { text: "Cabo de rede já montado com conectores RJ45 nas duas pontas", correct: false },
            { text: "Adaptador ativo de rede com amplificação de sinal", correct: false },
            { text: "Cabo coaxial utilizado para sistemas de TV", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual é a principal função de um patch cord em uma rede estruturada?",
        answers: [
            { text: "Interligar equipamentos e pontos de rede de forma prática e padronizada", correct: true },
            { text: "Interligar dispositivos de rede seguindo padrões de cabeamento estruturado", correct: false },
            { text: "Converter sinal elétrico em sinal óptico", correct: false },
            { text: "Aumentar automaticamente a velocidade da rede", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Quais opções de comprimento do Patch Cord Cat6?",
        answers: [
            { text: "1,5 metros e 2,5 metros", correct: true },
            { text: "Comprimentos padronizados de 1,5 m e 2,5 m", correct: false },
            { text: "25 metros", correct: false },
            { text: "Comprimento variável ajustável", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Que tipo de conector está presente nas extremidades deste patch cord?",
        answers: [
            { text: "Conectores RJ45 macho", correct: true },
            { text: "Conectores RJ45 do tipo macho em ambas as extremidades", correct: false },
            { text: "Conectores BNC coaxiais", correct: false },
            { text: "Conectores ópticos SC", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual vantagem um patch cord Cat6 oferece em relação a cabos improvisados?",
        answers: [
            { text: "Maior confiabilidade, padronização e desempenho elétrico", correct: true },
            { text: "Maior confiabilidade e desempenho por seguir padrões de fabricação", correct: false },
            { text: "Capacidade de conversão de sinal", correct: false },
            { text: "Eliminação total de interferências sem blindagem", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual é uma aplicação típica para este Patch Cord Cat6?",
        answers: [
            { text: "Conectar computadores, switches, roteadores ou patch panels", correct: true },
            { text: "Conectar equipamentos de rede em racks e pontos estruturados", correct: false },
            { text: "Interligar antenas de rádio frequência", correct: false },
            { text: "Distribuir energia elétrica em racks", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual prática ajuda a preservar a vida útil de um patch cord?",
        answers: [
            { text: "Evitar dobras excessivas e tração nos conectores", correct: true },
            { text: "Evitar esforço mecânico excessivo e puxões nos conectores", correct: false },
            { text: "Remover a capa externa para melhor ventilação", correct: false },
            { text: "Utilizar o cabo como elemento de sustentação", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual problema pode ocorrer ao utilizar um patch cord danificado?",
        answers: [
            { text: "Falhas de conexão, perda de desempenho ou intermitência na rede", correct: true },
            { text: "Problemas de conexão e instabilidade na comunicação de dados", correct: false },
            { text: "Conversão do sinal em fibra óptica", correct: false },
            { text: "Blindagem adicional contra interferências", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "O que define corretamente o produto Patch Panel 24 Portas Cat5e Fast Track Aluminium?",
        answers: [
            { text: "Painel de distribuição para terminação e organização de cabos de rede Cat5e em racks", correct: true },
            { text: "Painel destinado à terminação e organização física de cabos de rede Cat5e", correct: false },
            { text: "Equipamento ativo responsável por comutação de pacotes de rede", correct: false },
            { text: "Adaptador de mídia para conversão de cobre em fibra óptica", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Quantas portas RJ45 estão disponíveis neste patch panel?",
        answers: [
            { text: "24 portas", correct: true },
            { text: "Vinte e quatro portas físicas para conexão de rede", correct: false },
            { text: "48 portas utilizando conexão em cascata", correct: false },
            { text: "16 portas físicas e 8 virtuais", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "A qual categoria de cabeamento estruturado este patch panel pertence?",
        answers: [
            { text: "Categoria 5e (Cat5e)", correct: true },
            { text: "Categoria Cat5e conforme padrões de cabeamento estruturado", correct: false },
            { text: "Categoria 7 com conectores GG45", correct: false },
            { text: "Categoria 3 para telefonia analógica", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual é a principal função de um patch panel em uma rede estruturada?",
        answers: [
            { text: "Centralizar, organizar e facilitar a administração dos pontos de rede", correct: true },
            { text: "Centralizar e organizar os pontos de rede em um único local", correct: false },
            { text: "Substituir switches e roteadores", correct: false },
            { text: "Atuar como amplificador ativo de sinal", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "O que caracteriza o sistema Fast Track presente neste patch panel?",
        answers: [
            { text: "Facilidade e rapidez na terminação dos cabos, reduzindo tempo de instalação", correct: true },
            { text: "Sistema que facilita e agiliza o processo de terminação dos cabos", correct: false },
            { text: "Mecanismo ativo de amplificação de sinal", correct: false },
            { text: "Tecnologia sem fio para conexão dos cabos", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual é a principal vantagem do uso de alumínio na estrutura do patch panel?",
        answers: [
            { text: "Maior resistência mecânica e durabilidade com menor peso", correct: true },
            { text: "Estrutura mais leve e resistente para instalação em racks", correct: false },
            { text: "Eliminação da necessidade de aterramento", correct: false },
            { text: "Transformação do patch panel em equipamento ativo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Que tipo de conector está presente na parte frontal do patch panel?",
        answers: [
            { text: "Conectores RJ45 fêmea Cat5e", correct: true },
            { text: "Conectores RJ45 fêmea compatíveis com categoria Cat5e", correct: false },
            { text: "Conectores RJ11 de telefonia", correct: false },
            { text: "Conectores ópticos SC", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Onde este patch panel é normalmente instalado?",
        answers: [
            { text: "Em racks ou armários de telecomunicações padrão", correct: true },
            { text: "Em racks e armários próprios para infraestrutura de rede", correct: false },
            { text: "Diretamente em computadores desktop", correct: false },
            { text: "Em ambientes externos sem proteção", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual recurso do patch panel auxilia na identificação dos pontos de rede?",
        answers: [
            { text: "Numeração das portas na parte frontal", correct: true },
            { text: "Identificação numérica das portas no painel frontal", correct: false },
            { text: "Iluminação LED por porta", correct: false },
            { text: "Identificação automática via software", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "O que define corretamente a Régua Vazia Patch Panel 24 Portas Cat6?",
        answers: [
            { text: "Estrutura para instalação de keystone jacks, utilizada na organização de redes Cat6 em racks", correct: true },
            { text: "Estrutura destinada à instalação modular de keystone jacks em redes Cat6", correct: false },
            { text: "Equipamento ativo responsável pela comutação de dados", correct: false },
            { text: "Cabo de rede pronto com 24 conectores integrados", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Por que o termo “régua vazia” é utilizado na descrição deste produto?",
        answers: [
            { text: "Porque não possui conectores instalados, permitindo personalização com keystone jacks", correct: true },
            { text: "Porque não possui conectores instalados e depende de keystones para uso", correct: false },
            { text: "Porque não suporta passagem de sinal elétrico", correct: false },
            { text: "Porque é destinada apenas à organização estética dos cabos", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Quantos pontos de conexão podem ser montados nesta régua vazia?",
        answers: [
            { text: "Até 24 portas, conforme a quantidade de keystone jacks instalados", correct: true },
            { text: "Até vinte e quatro pontos de conexão com uso de keystone jacks", correct: false },
            { text: "48 portas utilizando cabos em Y", correct: false },
            { text: "Quantidade indefinida sem limite físico", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Por que esta régua é classificada como Cat6?",
        answers: [
            { text: "Porque foi projetada para suportar componentes e desempenho compatíveis com redes Cat6", correct: true },
            { text: "Porque foi desenvolvida para uso com componentes compatíveis com a categoria Cat6", correct: false },
            { text: "Porque converte automaticamente cabos Cat5e em Cat6", correct: false },
            { text: "Porque só funciona com conectores blindados STP", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual tipo de conector deve ser utilizado nesta régua vazia?",
        answers: [
            { text: "Keystone jack RJ45 compatível com Cat6", correct: true },
            { text: "Keystone jack RJ45 projetado para categoria Cat6", correct: false },
            { text: "Conector RJ11 de telefonia fixa", correct: false },
            { text: "Conector óptico SC ou LC", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Onde a régua vazia patch panel 24 portas Cat6 é normalmente instalada?",
        answers: [
            { text: "Em racks ou armários de telecomunicações padrão", correct: true },
            { text: "Em racks e armários próprios para infraestrutura de rede", correct: false },
            { text: "Diretamente em computadores ou servidores", correct: false },
            { text: "Em ambientes externos sem proteção", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual é a principal função da régua vazia dentro de um rack?",
        answers: [
            { text: "Organizar e concentrar os pontos de rede de forma modular", correct: true },
            { text: "Centralizar e organizar os pontos de rede de forma modular", correct: false },
            { text: "Distribuir energia elétrica entre equipamentos", correct: false },
            { text: "Atuar como switch de rede passivo", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual característica estrutural é esperada em uma régua vazia para patch panel?",
        answers: [
            { text: "Estrutura metálica resistente para fixação em rack", correct: true },
            { text: "Estrutura metálica projetada para instalação firme em rack padrão", correct: false },
            { text: "Estrutura emborrachada para uso portátil", correct: false },
            { text: "Revestimento cerâmico para isolamento térmico", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual é a principal diferença entre uma régua vazia e um patch panel completo?",
        answers: [
            { text: "A régua vazia não possui conectores instalados, permitindo customização", correct: true },
            { text: "A régua vazia permite customização por não possuir conectores instalados", correct: false },
            { text: "O patch panel completo não pode ser instalado em rack", correct: false },
            { text: "A régua vazia funciona apenas para telefonia", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual boa prática deve ser adotada ao instalar keystone jacks nesta régua vazia?",
        answers: [
            { text: "Manter os pares trançados o mais próximo possível do ponto de terminação", correct: true },
            { text: "Manter o trançamento dos pares próximo ao ponto de terminação", correct: false },
            { text: "Misturar categorias diferentes de conectores no mesmo enlace", correct: false },
            { text: "Dobrar os cabos em ângulos fechados atrás da régua", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Por que o testador de cabos é considerado um equipamento passivo?",
        answers: [
            { text: "Porque apenas analisa conexões elétricas sem interferir no sinal do cabo", correct: true },
            { text: "Porque apenas verifica conexões elétricas sem atuar no sinal do cabo", correct: false },
            { text: "Porque funciona sem qualquer fonte de energia", correct: false },
            { text: "Porque converte sinais analógicos em digitais", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Quais tipos de cabos podem ser testados com o equipamento 22.010?",
        answers: [
            { text: "Cabos RJ11, RJ45, BNC e USB", correct: true },
            { text: "Cabos RJ11, RJ45, BNC e conexões USB", correct: false },
            { text: "Somente cabos ópticos SC e LC", correct: false },
            { text: "Cabos de energia elétrica de baixa tensão", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "A presença do conector BNC no testador indica compatibilidade com qual aplicação?",
        answers: [
            { text: "Testes de cabos coaxiais usados em CFTV e vídeo", correct: true },
            { text: "Testes de cabos coaxiais utilizados em sistemas de vídeo e CFTV", correct: false },
            { text: "Testes de cabos HDMI de alta definição", correct: false },
            { text: "Testes de cabos de áudio balanceado XLR", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Ao testar um cabo RJ45, que tipo de falhas o testador 22.010 consegue identificar?",
        answers: [
            { text: "Fios rompidos, invertidos, em curto ou com sequência incorreta", correct: true },
            { text: "Fios rompidos, invertidos, em curto ou fora da sequência correta", correct: false },
            { text: "Latência e jitter da conexão", correct: false },
            { text: "Configuração lógica de VLANs", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual é o principal objetivo do teste de cabos RJ11 neste equipamento?",
        answers: [
            { text: "Verificar continuidade e ligação correta em sistemas de telefonia", correct: true },
            { text: "Verificar continuidade e conexão correta em sistemas de telefonia", correct: false },
            { text: "Certificar enlaces de dados Ethernet", correct: false },
            { text: "Converter sinal analógico em digital", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual é o limite de teste de cabos USB neste tipo de testador?",
        answers: [
            { text: "Ele verifica apenas continuidade elétrica, não desempenho ou velocidade de transmissão", correct: true },
            { text: "Ele verifica apenas a continuidade elétrica, sem medir desempenho ou velocidade", correct: false },
            { text: "Ele só funciona com cabos longos", correct: false },
            { text: "Ele converte sinais USB em Ethernet", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual é a função dos LEDs presentes no testador de cabos 22.010?",
        answers: [
            { text: "Indicar continuidade, sequência correta e possíveis falhas nos fios", correct: true },
            { text: "Indicar continuidade, sequência dos fios e possíveis falhas de conexão", correct: false },
            { text: "Mostrar endereços IP automaticamente", correct: false },
            { text: "Iluminar o ambiente de trabalho", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual a vantagem de um testador possuir unidade principal e módulo remoto?",
        answers: [
            { text: "Permitir testes em cabos já instalados e com extremidades distantes", correct: true },
            { text: "Permitir testes em cabos instalados com extremidades separadas", correct: false },
            { text: "Transformar o testador em equipamento ativo", correct: false },
            { text: "Aumentar a velocidade da rede", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual problema pode ser evitado ao utilizar o testador de cabos antes da entrega da instalação?",
        answers: [
            { text: "Falhas de conexão e retrabalho causados por cabos mal montados", correct: true },
            { text: "Falhas de conexão e retrabalho decorrentes de cabos montados incorretamente", correct: false },
            { text: "Configuração incorreta de endereçamento IP", correct: false },
            { text: "Necessidade de equipamentos ativos adicionais", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "Quais tipos de cabos físicos este testador é projetado para analisar?",
        answers: [
            { text: "Cabos com conectores RJ11 e RJ45 já crimpados", correct: true },
            { text: "Cabos com conectores RJ11 e RJ45 previamente crimpados", correct: false },
            { text: "Cabos HDMI e DisplayPort", correct: false },
            { text: "Cabos de alimentação elétrica em corrente alternada", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "Que tipos de cabos RJ11 podem ser testados com o equipamento 22-006?",
        answers: [
            { text: "Cabos RJ11 de 2, 4 e 6 vias", correct: true },
            { text: "Cabos RJ11 com 2, 4 ou 6 vias de conexão", correct: false },
            { text: "Somente RJ11 de 8 vias", correct: false },
            { text: "Somente cabos de uma via", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "Ao testar um cabo RJ45, que tipo de problema o testador consegue identificar?",
        answers: [
            { text: "Fios rompidos, invertidos, em curto ou com sequência incorreta", correct: true },
            { text: "Fios rompidos, invertidos, em curto ou fora da sequência correta", correct: false },
            { text: "Configuração lógica de IP ou VLAN", correct: false },
            { text: "Disponibilidade de PoE no switch", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "Qual é a função dos LEDs no Testador de Cabo 22-006?",
        answers: [
            { text: "Indicar continuidade, ordem correta dos fios e falhas de conexão", correct: true },
            { text: "Indicar continuidade, sequência dos fios e possíveis falhas", correct: false },
            { text: "Fornecer iluminação ao local de trabalho", correct: false },
            { text: "Mostrar configuração do roteador", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "O que normalmente indica um LED que não acende ou uma sequência incorreta durante o teste?",
        answers: [
            { text: "Erro de crimpagem, fio rompido ou pinagem incorreta", correct: true },
            { text: "Erro de crimpagem, fio danificado ou ligação fora do padrão", correct: false },
            { text: "Problema de configuração no switch", correct: false },
            { text: "Baixa luminosidade do ambiente", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "Quando o Testador de Cabo 22-006 deve ser utilizado durante uma instalação?",
        answers: [
            { text: "Após a crimpagem dos conectores, antes da entrega ou conexão aos equipamentos", correct: true },
            { text: "Após a crimpagem dos conectores e antes da ligação aos equipamentos", correct: false },
            { text: "Durante a configuração lógica da rede", correct: false },
            { text: "Somente após ativar a rede Wi-Fi", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "Qual é uma limitação esperada desse tipo de testador?",
        answers: [
            { text: "Ele não mede desempenho real de transmissão, apenas continuidade e sequência", correct: true },
            { text: "Ele não mede desempenho de transmissão, apenas continuidade e sequência elétrica", correct: false },
            { text: "Ele corrige automaticamente erros de pinagem", correct: false },
            { text: "Ele testa cabos coaxiais sem adaptadores", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 e RJ45 - GTS",
        question: "Por que é importante testar o cabo sem desmontar ou alterar a instalação física?",
        answers: [
            { text: "Porque permite diagnóstico rápido sem interferir na montagem do cabo", correct: true },
            { text: "Porque permite identificar falhas rapidamente sem alterar a montagem", correct: false },
            { text: "Porque elimina a necessidade de ferramentas de crimpagem", correct: false },
            { text: "Porque converte sinais analógicos em digitais", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "O que caracteriza corretamente o produto 73.3008K?",
        answers: [
            { text: "Switch de mesa Plug and Play com 8 portas Gigabit Ethernet", correct: true },
            { text: "Switch de mesa com 8 portas Ethernet para conexão de dispositivos", correct: false },
            { text: "Hub de rede Fast Ethernet", correct: false },
            { text: "Conversor de mídia óptico industrial gerenciável", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Por que o switch 73.3008K é classificado como Plug and Play?",
        answers: [
            { text: "Porque funciona automaticamente sem necessidade de configuração de software", correct: true },
            { text: "Porque opera automaticamente sem exigir ajustes ou configurações iniciais", correct: false },
            { text: "Porque exige firmware personalizado", correct: false },
            { text: "Porque depende de VLANs previamente configuradas", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Quantas portas Ethernet e quais velocidades são suportadas pelo switch?",
        answers: [
            { text: "8 portas Ethernet com suporte a 10, 100 e 1000 Mbps", correct: true },
            { text: "8 portas Ethernet compatíveis com múltiplas velocidades de transmissão", correct: false },
            { text: "8 portas apenas Fast Ethernet", correct: false },
            { text: "8 portas ópticas SFP", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "O que é a função NWay (auto-negociação) e qual seu benefício?",
        answers: [
            { text: "Ajusta automaticamente velocidade e duplex conforme o dispositivo conectado", correct: true },
            { text: "Ajusta automaticamente parâmetros de conexão conforme o equipamento ligado", correct: false },
            { text: "Cria VLANs automaticamente", correct: false },
            { text: "Converte sinal elétrico em óptico", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Qual a função dos LEDs no switch 73.3008K?",
        answers: [
            { text: "Indicar status de energia, link ativo e tráfego de dados", correct: true },
            { text: "Indicar energia, atividade de link e movimentação de dados", correct: false },
            { text: "Exibir consumo elétrico em tempo real", correct: false },
            { text: "Apontar falhas internas de firmware", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "O que significa o switch operar em Full Duplex?",
        answers: [
            { text: "Enviar e receber dados simultaneamente na mesma porta", correct: true },
            { text: "Transmitir e receber dados ao mesmo tempo em uma única porta", correct: false },
            { text: "Utilizar metade da largura de banda", correct: false },
            { text: "Exigir configuração manual de comunicação", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Para que servem a tabela MAC e o buffer de memória do switch?",
        answers: [
            { text: "Aprender endereços dos dispositivos e gerenciar pacotes em picos de tráfego", correct: true },
            { text: "Registrar dispositivos conectados e administrar pacotes durante congestionamentos", correct: false },
            { text: "Atribuir endereços IP automaticamente", correct: false },
            { text: "Armazenar logs permanentes de usuários", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Como é feita a alimentação elétrica do switch e qual seu benefício?",
        answers: [
            { text: "Fonte externa bivolt auto sense, que se adapta à tensão automaticamente", correct: true },
            { text: "Fonte externa bivolt com adaptação automática à tensão de entrada", correct: false },
            { text: "Alimentação via PoE", correct: false },
            { text: "Bateria interna recarregável", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Em quais ambientes o switch 73.3008K é mais indicado?",
        answers: [
            { text: "Pequenos escritórios, redes residenciais e redes de acesso", correct: true },
            { text: "Pequenos ambientes corporativos, residenciais e redes de acesso locais", correct: false },
            { text: "Backbone de data centers", correct: false },
            { text: "Ambientes externos sem proteção climática", correct: false }
        ]
    },

    /*
    ==================================================
                    FIBRA ÓPTICA
    ==================================================
    */
    
    {
        category: "fiber",
        product: "Speed Star Mini Flat Drop",
        question: "Qual é o tipo de fibra mais utilizada em FTTH?",
        answers: [
            { text: "Monomodo", correct: true },
            { text: "Multimodo", correct: false },
            { text: "Coaxial", correct: false },
            { text: "Metálica", correct: false }
        ]
    }
];

/* =========================
   ELEMENTOS
========================= */

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const productNameEl = document.getElementById("product-name");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");

const correctCountEl = document.getElementById("correct-count");
const questionCountEl = document.getElementById("question-count");
const finalScoreEl = document.getElementById("final-score");
const timerBar = document.getElementById("timer-bar");

const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalProducts = document.getElementById("modal-products");

/* =========================
   MODAL
========================= */

function openModal(type) {
    modal.style.display = "block";
    modalProducts.innerHTML = "";

    const isCabling = type === "cabling";
    modalTitle.innerText = isCabling
        ? "Cabling - Escolha o Produto"
        : "Fibra Óptica - Escolha o Produto";

    const products = [
        ...new Set(
            allQuestions
                .filter(q => q.category === type)
                .map(q => q.product)
        )
    ];

    products.forEach(product => {
        const btn = document.createElement("button");
        btn.innerText = product;
        btn.onclick = () => {
            closeModal();
            startQuiz({ type: "product", product });
        };
        modalProducts.appendChild(btn);
    });
}

function closeModal() {
    modal.style.display = "none";
}

/* =========================
   QUIZ
========================= */

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz(config) {
    if (config.type === "product") {
        questions = allQuestions.filter(q => q.product === config.product);
    }

    if (config.type === "cabling-general") {
        questions = allQuestions.filter(q => q.category === "cabling");
    }

    if (config.type === "fiber-general") {
        questions = allQuestions.filter(q => q.category === "fiber");
    }

    if (config.type === "all") {
        questions = [...allQuestions];
    }

    questions = shuffle(questions);
    currentQuestion = 0;
    correctAnswers = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    loadQuestion();
}

function startTimer() {
    timeLeft = TIME_LIMIT;
    timerBar.style.width = "100%";

    timerInterval = setInterval(() => {
        timeLeft--;
        timerBar.style.width = (timeLeft / TIME_LIMIT) * 100 + "%";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeExpired();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timerInterval);
    answered = false;
    nextBtn.style.display = "none";
    answersEl.innerHTML = "";

    const q = questions[currentQuestion];

    productNameEl.innerText = q.product;
    questionEl.innerText = q.question;

    correctCountEl.innerText = correctAnswers;
    questionCountEl.innerText = currentQuestion;

    shuffle([...q.answers]).forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.classList.add("answer");
        btn.onclick = () => selectAnswer(btn, answer.correct);
        answersEl.appendChild(btn);
    });

    startTimer();
}

function selectAnswer(button, isCorrect) {
    if (answered) return;
    answered = true;

    clearInterval(timerInterval);
    document.querySelectorAll(".answer").forEach(btn => btn.disabled = true);

    document.querySelectorAll(".answer").forEach(btn => {
        const correct = questions[currentQuestion].answers.find(a => a.text === btn.innerText)?.correct;
        if (correct) btn.classList.add("correct");
    });

    if (isCorrect) correctAnswers++;
    else button.classList.add("wrong");

    nextBtn.style.display = "block";
}

function timeExpired() {
    if (answered) return;
    answered = true;

    document.querySelectorAll(".answer").forEach(btn => {
        btn.disabled = true;
        const correct = questions[currentQuestion].answers.find(a => a.text === btn.innerText)?.correct;
        if (correct) btn.classList.add("correct");
    });

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) loadQuestion();
    else finishQuiz();
}

function finishQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.remove("active");
    endScreen.classList.add("active");

    finalScoreEl.innerText =
        `Você respondeu ${currentQuestion} perguntas e acertou ${correctAnswers}.`;
}

function restartQuiz() {
    endScreen.classList.remove("active");
    startScreen.classList.add("active");
}
