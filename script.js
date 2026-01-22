const TIME_LIMIT = 90;

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
            { text: "Liga de cobre estanhado com alma de aço", correct: false },
            { text: "Cobre CCA (Copper Clad Aluminum)", correct: false },
            { text: "Alumínio com banho de cobre em sua superfície", correct: false }
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
            { text: "PVC flexível", correct: false },
            { text: "Polipropileno retardante a chamas", correct: false },
            { text: "Borracha sintética", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é o material da capa externa do cabo?",
        answers: [
            { text: "Policloreto de Vinila (PVC)", correct: true },
            { text: "Polietileno de Alta Densidade (PEAD) com malha metálica", correct: false },
            { text: "LSZH halogen-free", correct: false },
            { text: "Borracha nitrílica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Quantos pares o cabo LAN Expert pode possuir?",
        answers: [
            { text: "4 pares (8 vias) ou 2 pares (4 vias)", correct: true },
            { text: "Somente 4 pares", correct: false },
            { text: "Somente 2 pares", correct: false },
            { text: "6 pares (12 vias) ou 4 pares (8 vias) ou 2 pares (4 vias)", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é a classe de flamabilidade do cabo?",
        answers: [
            { text: "CMX conforme IEC 60332-1 e ABNT NBR 14705", correct: true },
            { text: "CMP (Plenum)", correct: false },
            { text: "CMR (Riser)", correct: false },
            { text: "LSZH", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual a faixa de temperatura de operação do cabo?",
        answers: [
            { text: "-20°C a 60°C", correct: true },
            { text: "0°C a 50°C", correct: false },
            { text: "-40°C a 85°C", correct: false },
            { text: "-10°C a 70°C", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Quais são as principais cores disponíveis da capa externa?",
        answers: [
            { text: "Preta ou Azul", correct: true },
            { text: "Roxo ou Branco", correct: false },
            { text: "Amarelo ou Laranja", correct: false },
            { text: "Verde ou Vermelho", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual o comprimento padrão da embalagem em caixa?",
        answers: [
            { text: "305 metros", correct: true },
            { text: "200 metros", correct: false },
            { text: "250 metros", correct: false },
            { text: "333 metros", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é o diâmetro nominal do cabo em caixa de 305m?",
        answers: [
            { text: "5,20 mm", correct: true },
            { text: "4,80 mm", correct: false },
            { text: "6,00 mm", correct: false },
            { text: "5,80 mm", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Por que o cabo LAN Expert Turbo Link Cat5e pode ser utilizado com Gigabit Ethernet?",
        answers: [
            { text: "Porque atende os parâmetros de desempenho como NEXT, ELFEXT e Delay Skew", correct: true },
            { text: "Porque parece robusto externamente", correct: false },
            { text: "Porque possui blindagem metálica completa", correct: false },
            { text: "Porque tem isolamento de borracha", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é uma das vantagens de trançar os pares par a par no cabo LAN Expert?",
        answers: [
            { text: "Reduzir interferências eletromagnéticas entre pares", correct: true },
            { text: "Aumentar a resistência mecânica da capa", correct: false },
            { text: "Facilitar o encaixe dos conectores RJ45 para melhor conexão", correct: false },
            { text: "Melhorar o aterramento da rede", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Quais aplicações de rede são suportadas pelo cabo LAN Expert Turbo Link Cat5e?",
        answers: [
            { text: "Fast Ethernet, 622 Mbps ATM e Gigabit Ethernet", correct: true },
            { text: "622Mbps,  10G Ethernet, 40G Ethernet, 60G Ethernet", correct: false },
            { text: "Somente Fast Ethernet", correct: false },
            { text: "Conexões ópticas de fibra", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "O teste de qualidade desse cabo menciona conformidade com qual padrão de cabeamento?",
        answers: [
            { text: "EIA/TIA-568", correct: true },
            { text: "IEEE 802.16", correct: false },
            { text: "IEEE 802.11ax", correct: false },
            { text: "USB-IF 3.2", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "O cabo Cat5e Turbo Link é tipicamente classificado como qual tipo físico?",
        answers: [
            { text: "Cabo UTP (Unshielded Twisted Pair)", correct: true },
            { text: "Cabo UTP (Universal Transmission Path)", correct: false },
            { text: "Cabo UTP (Unbalanced Twisted Plastic)", correct: false },
            { text: "Cabo UTP (Ultra Transfer Protocol)", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é o propósito dos aditivos UV na capa externa do cabo LAN Expert Turbo Link Cat5e?",
        answers: [
            { text: "Proteção contra radiação ultravioleta para uso externo e interno", correct: true },
            { text: "Aumentar a espessura do isolamento interno dos pares", correct: false },
            { text: "Aumentar a velocidade de transmissão do sinal para maior alcance", correct: false },
            { text: "Garantir compatibilidade com conectores ópticos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "Qual é a vantagem de um cabo com cobre 100% virgem comparado a cabos CCA?",
        answers: [
            { text: "Maior condutividade e menor perda de sinal", correct: true },
            { text: "Maior compatibilidade com fibra óptica multimodo", correct: false },
            { text: "Melhor isolamento contra UV", correct: false },
            { text: "Capacidade de transmissão acima de 40 Gbps", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Turbo Link Cat5e UTP",
        question: "A temperatura de instalação especificada de 0ºC a 50ºC serve principalmente para:",
        answers: [
            { text: "Evitar deformação da capa durante a instalação", correct: true },
            { text: "Melhorar a capacidade de transmissão a 10 Gbps", correct: false },
            { text: "Aumentar a imunidade a interferências magnéticas", correct: false },
            { text: "Garantir uso em fibra óptica sem adaptadores", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Qual é o principal objetivo da blindagem FTP no cabo Hércules 1.0?",
        answers: [
            { text: "Reduzir interferências eletromagnéticas e proteger a integridade do sinal", correct: true },
            { text: "Aumentar a rigidez mecânica do cabo para suportar mais peso exercido", correct: false },
            { text: "Substituir o isolamento de polietileno dos condutores", correct: false },
            { text: "Permitir transmissão direta de fibra óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Qual o papel da fita de polietileno aluminizada presente na blindagem?",
        answers: [
            { text: "Reduzir ruídos eletromagnéticos e aumentar a estabilidade do sinal", correct: true },
            { text: "Substituir a função do fio terra", correct: false },
            { text: "Aumentar a capacidade de corrente elétrica do cabo para melhor transmissão", correct: false },
            { text: "Transformar o cabo em STP completo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Qual é a função do fio terra presente na construção do cabo?",
        answers: [
            { text: "Drenar interferências captadas pela blindagem FTP", correct: true },
            { text: "Fornecer alimentação elétrica aos dispositivos PoE", correct: false },
            { text: "Substituir o par azul para aterramento", correct: false },
            { text: "Eliminar a necessidade de conectores metálicos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Por que a segunda capa em PEAD com proteção UV aumenta a vida útil do cabo?",
        answers: [
            { text: "Porque protege contra degradação química, térmica e solar", correct: true },
            { text: "Porque aumenta a taxa de transmissão de dados por Mbps", correct: false },
            { text: "Porque substitui a blindagem metálica", correct: false },
            { text: "Porque elimina a necessidade de aterramento", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "O que a primeira capa interna em PVC cinza protege?",
        answers: [
            { text: "Contra poeira, sol, chuva e abrasão interna", correct: true },
            { text: "Contra interferência magnética de motores", correct: false },
            { text: "Contra descargas atmosféricas diretas", correct: false },
            { text: "Contra curto-circuitos de PoE", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Qual é o benefício da espessura nominal de 1,50 mm da segunda capa externa?",
        answers: [
            { text: "Maior resistência mecânica e química contra intempéries", correct: true },
            { text: "Maior largura de banda elétrica", correct: false },
            { text: "Compatibilidade com redes 10G e fluxo de dados cada vez maiores", correct: false },
            { text: "Redução de impedância elétrica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Por que um diâmetro externo nominal de 7,5 mm é relevante para instalação?",
        answers: [
            { text: "Impacta na robustez mecânica e no tipo de conduíte necessário", correct: true },
            { text: "Define a categoria de transmissão de dados para maior eficiência", correct: false },
            { text: "Determina a velocidade de Gigabit Ethernet", correct: false },
            { text: "Define o tipo de conector RJ11 compatível", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Por que o Hércules 1.0 é mais indicado para CFTV IP externo que um Cat5e comum?",
        answers: [
            { text: "Porque possui blindagem FTP e dupla capa com proteção UV", correct: true },
            { text: "Porque tem conectores blindados integrados", correct: false },
            { text: "Porque suporta transmissão óptica com maior fluxo de dados", correct: false },
            { text: "Porque é imune a raios", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Por que o uso de cobre virgem sólido 24 AWG é crítico em PoE?",
        answers: [
            { text: "Menor resistência elétrica e menor aquecimento", correct: true },
            { text: "Maior flexibilidade mecânica para maior esforço", correct: false },
            { text: "Menor custo por metro", correct: false },
            { text: "Menor diâmetro externo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Qual a função do isolamento em polietileno de alta densidade dos pares?",
        answers: [
            { text: "Garantir estabilidade dielétrica e isolamento elétrico", correct: true },
            { text: "Aumentar a proteção UV contra elementos climáticos externos", correct: false },
            { text: "Substituir a blindagem metálica", correct: false },
            { text: "Aumentar resistência mecânica externa", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Por que a gravação no cabo inclui EIA/TIA 568?",
        answers: [
            { text: "Para indicar conformidade com normas de cabeamento estruturado", correct: true },
            { text: "Para indicar compatibilidade com fibra óptica do tipo monomodo", correct: false },
            { text: "Para indicar potência PoE", correct: false },
            { text: "Para indicar nível de blindagem STP", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Por que o cabo utiliza 4 pares (8 vias)?",
        answers: [
            { text: "Para permitir Gigabit Ethernet e aplicações profissionais", correct: true },
            { text: "Para alimentar dispositivos elétricos de maneira eficiente", correct: false },
            { text: "Para aumentar a resistência mecânica", correct: false },
            { text: "Para permitir comunicação óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Por que a blindagem FTP é mais eficiente que UTP em ambientes industriais?",
        answers: [
            { text: "Porque bloqueia campos eletromagnéticos externos", correct: true },
            { text: "Porque aumenta a potência de transmissão de dados", correct: false },
            { text: "Porque elimina a necessidade de aterramento", correct: false },
            { text: "Porque substitui conduítes metálicos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Lan Expert Hércules Cat5e FTP",
        question: "Qual vantagem comercial direta o Hércules 1.0 entrega frente a cabos Cat5e comuns?",
        answers: [
            { text: "Menos falhas, mais estabilidade e maior vida útil", correct: true },
            { text: "Maior largura de banda que Cat6, com alta eficiência", correct: false },
            { text: "Imunidade total a raios", correct: false },
            { text: "Transmissão óptica sem conversores", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual é a função das estrias (microfilamentos) presentes na capa externa do cabo GTS Cat5e?",
        answers: [
            { text: "Aumentar a aderência no manuseio e reduzir o atrito durante a instalação em eletrodutos", correct: true },
            { text: "Blindar o cabo contra interferências eletromagnéticas externas e garantir resistência mecânica", correct: false },
            { text: "Aumentar a impedância elétrica do condutor para longas distâncias", correct: false },
            { text: "Transformar o cabo em categoria 6 automaticamente através da geometria", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Por que o cabo GTS Cat5e pode ser usado tanto em ambientes internos quanto externos?",
        answers: [
            { text: "Porque possui capa de PVC CMX resistente a UV e intempéries", correct: true },
            { text: "Porque possui blindagem metálica FTP em cada par", correct: false },
            { text: "Porque tem condutores ópticos híbridos em sua composição", correct: false },
            { text: "Porque suporta temperaturas extremas de congelamento até -80°C", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual característica reduz a interferência eletromagnética entre os pares (Crosstalk)?",
        answers: [
            { text: "O trançamento dos pares", correct: true },
            { text: "A estriação da capa externa", correct: false },
            { text: "A cor do isolamento das vias", correct: false },
            { text: "O diâmetro externo total do cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "O que garante a classificação de flamabilidade CMX no cabo GTS Cat5e?",
        answers: [
            { text: "Segurança contra propagação de chamas em tubulações metálicas e áreas restritas", correct: true },
            { text: "Compatibilidade certificada para instalações submarinas de alta profundidade", correct: false },
            { text: "Presença de blindagem eletromagnética total (folha de alumínio) em volta do cabo", correct: false },
            { text: "Proteção integrada contra surtos elétricos induzidos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Por que respeitar o raio mínimo de curvatura é vital em uma instalação de rede?",
        answers: [
            { text: "Evita microfissuras mecânicas e perda de desempenho por degradação elétrica", correct: true },
            { text: "Aumenta a velocidade de propagação do sinal acima do nominal determinado", correct: false },
            { text: "Impede o aquecimento excessivo do PVC em dias quentes", correct: false },
            { text: "Melhora exclusivamente a estética visual do rack", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "O que tecnicamente define o cabo como sendo do tipo U/UTP?",
        answers: [
            { text: "Cabo sem blindagem (Unshielded), composto por pares trançados", correct: true },
            { text: "Cabo com blindagem em folha metálica para cada par individual", correct: false },
            { text: "Cabo híbrido que utiliza condutores de cobre e fibras ópticas", correct: false },
            { text: "Cabo projetado exclusivamente para enterramento direto no solo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual a vantagem técnica de utilizar cobre eletrolítico virgem 24 AWG?",
        answers: [
            { text: "Menor resistência elétrica e maior estabilidade na transmissão de dados", correct: true },
            { text: "Maior flexibilidade mecânica para dobras em ângulos retos dentro da instalação", correct: false },
            { text: "Redução drástica no custo final de produção da embalagem", correct: false },
            { text: "Permite a redução do diâmetro externo total do cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual norma internacional garante que o cabo GTS é compatível com sistemas de cabeamento estruturado?",
        answers: [
            { text: "EIA/TIA 568-2-D", correct: true },
            { text: "IEEE 802.11ax (Wi-Fi 6)", correct: false },
            { text: "IEC 61850 (Automação de subestação)", correct: false },
            { text: "USB 3.2 Specification", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat5e UTP",
        question: "Qual a principal vantagem competitiva do GTS Cat5e frente a cabos genéricos de mercado?",
        answers: [
            { text: "Controle rigoroso de parâmetros elétricos e mecânicos em toda a extensão do cabo", correct: true },
            { text: "Capacidade de operar em velocidades superiores à Categoria 6 com alto desempenho", correct: false },
            { text: "Capacidade de transmissão nativa por fibra óptica", correct: false },
            { text: "Dispensa totalmente o uso de conectores RJ45 padrões", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual é a função da cruzeta (separador interno) presente no cabo GTS Cat6?",
        answers: [
            { text: "Separar fisicamente os pares para reduzir interferências eletromagnéticas e manter a geometria", correct: true },
            { text: "Aumentar a espessura mecânica da capa externa para proteção UV e efeitos do clima e intempéries externas.", correct: false },
            { text: "Substituir a blindagem metálica contra ruídos de rádio frequência que transitam em ambientes internos", correct: false },
            { text: "Servir como canal de dissipação térmica para aplicações de alta potência", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual é a principal vantagem técnica da capa externa estriada em instalações de rede?",
        answers: [
            { text: "Reduzir o atrito durante o puxamento em conduítes e facilitar o manuseio", correct: true },
            { text: "Aumentar a blindagem eletromagnética contra motores elétricos industriais", correct: false },
            { text: "Reduzir a impedância elétrica nominal dos condutores internos", correct: false },
            { text: "Permitir a dissipação de calor gerada por sistemas PoE de alta potência", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Por que o cobre eletrolítico virgem sólido 24 AWG é fundamental para aplicações PoE (Power over Ethernet)?",
        answers: [
            { text: "Porque reduz perdas por resistência elétrica e evita o aquecimento excessivo do cabo", correct: true },
            { text: "Porque aumenta a flexibilidade mecânica para curvas acentuadas e grandes ângulos ", correct: false },
            { text: "Porque permite atingir velocidades de transmissão acima de 10 Gbps em curtas distâncias", correct: false },
            { text: "Porque aumenta a imunidade da capa externa contra radiação UV", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual parâmetro de frequência indica a compatibilidade total com a Categoria 6?",
        answers: [
            { text: "Capacidade de transmissão de até 250 MHz", correct: true },
            { text: "Resistência mecânica à tração de 400 N", correct: false },
            { text: "Espessura da capa externa superior a 1,5 mm", correct: false },
            { text: "Peso nominal de 27 kg por quilômetro", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Qual a função do isolamento em polietileno de alta densidade (PEAD) nos condutores?",
        answers: [
            { text: "Garantir a estabilidade dielétrica e o isolamento elétrico entre os pares", correct: true },
            { text: "Aumentar a resistência mecânica da capa externa do cabo para maior impacto", correct: false },
            { text: "Substituir a função da cruzeta central no controle de ruído", correct: false },
            { text: "Atuar como blindagem contra ruídos eletromagnéticos externos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "Por que o raio mínimo de curvatura sem tensão deve ser respeitado (4× o diâmetro)?",
        answers: [
            { text: "Para evitar a deformação da cruzeta interna e a consequente degradação do desempenho elétrico", correct: true },
            { text: "Para facilitar apenas o aspecto visual da organização no rack e manter a instalação visualmente agradável", correct: false },
            { text: "Para reduzir o peso total do cabo durante a instalação aérea", correct: false },
            { text: "Para melhorar a aderência dos conectores RJ45 durante a crimpagem", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo de Rede GTS Cat6 UTP",
        question: "O que garante a conformidade do cabo GTS Cat6 com a norma internacional EIA/TIA 568.2-D?",
        answers: [
            { text: "A plena compatibilidade com sistemas de cabeamento estruturado Categoria 6", correct: true },
            { text: "A imunidade total contra surtos elétricos e descargas atmosféricas", correct: false },
            { text: "A possibilidade de realizar emendas diretas em redes de fibra óptica", correct: false },
            { text: "A garantia de que o cabo suporta qualquer nível de potência PoE sem switch", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual é a principal função da primeira capa interna em PVC emborrachado (Dencher)?",
        answers: [
            { text: "Absorver impactos e aumentar a resistência mecânica do cabo contra esmagamentos", correct: true },
            { text: "Substituir a blindagem eletromagnética FTP em ambientes industriais", correct: false },
            { text: "Aumentar a largura de banda elétrica para frequências acima de 500 MHz", correct: false },
            { text: "Permitir o aterramento do cabo diretamente em sistemas elétricos prediais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Por que o cabo Hard&Soft Gigamax possui o sistema de dupla capa (PVC + PEAD)?",
        answers: [
            { text: "Para amortecer impactos, resistir a intempéries/UV e facilitar o manuseio na instalação", correct: true },
            { text: "Para permitir que o cabo atue como um condutor híbrido de fibra óptica do tipo monomodo", correct: false },
            { text: "Para aumentar a impedância nominal do cabo para além de 120 Ohms", correct: false },
            { text: "Para converter automaticamente a performance do cabo para a Categoria 6", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual é o papel das estrias presentes na capa externa deste cabo?",
        answers: [
            { text: "Aumentar a aderência no manuseio e reduzir o atrito durante o puxamento em dutos", correct: true },
            { text: "Aumentar a velocidade de transmissão de dados através de indução", correct: false },
            { text: "Aumentar a capacidade de fornecimento de energia PoE para 100W e garantir estabilidade", correct: false },
            { text: "Criar uma barreira física contra campos magnéticos de alta frequência", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Por que o Hard&Soft é comercializado como um Cat5e 'TRUE 100 MHz'?",
        answers: [
            { text: "Porque garante largura de banda plena de 100 MHz utilizando cobre virgem sólido de alta pureza", correct: true },
            { text: "Porque utiliza uma cruzeta interna para separação de pares como os cabos Cat6 de forma eficiente", correct: false },
            { text: "Porque possui uma blindagem metálica total que impede qualquer perda de sinal", correct: false },
            { text: "Porque o cabo foi projetado para realizar transmissões ópticas nativas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual é a relevância do diâmetro nominal do condutor de 0,498 mm?",
        answers: [
            { text: "Influencia diretamente na menor resistência elétrica e maior estabilidade do sinal em longas distâncias", correct: true },
            { text: "Serve apenas para reduzir o peso final do cabo para instalações aéreas", correct: false },
            { text: "Aumenta a velocidade de propagação do sinal para perto da velocidade da luz e sua velocidade nominal", correct: false },
            { text: "Permite que o cabo seja utilizado como guia para lançamentos de fibra óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Cabo Hard&Soft Gigamax GTS Cat5e",
        question: "Qual o benefício das gravações métricas sequenciais a cada 1 metro?",
        answers: [
            { text: "Permite o controle preciso do estoque e da metragem utilizada em cada trecho da obra", correct: true },
            { text: "Aumenta a resistência química da capa contra agentes corrosivos que influenciam no sinal", correct: false },
            { text: "Melhora a impedância característica através da marcação a laser", correct: false },
            { text: "Expande a largura de banda disponível para aplicações Gigabit", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "O que identifica corretamente o conector macho RJ-45 Cat5e (41.045) e sua aplicação principal?",
        answers: [
            { text: "Conector macho para crimpagem em cabos UTP, ideal para confecção de patch cords e redes de dados", correct: true },
            { text: "Conector fêmea (Keystone) para painéis de parede e terminação de backbone e estrutura externa de rede", correct: false },
            { text: "Adaptador ativo ethernet para conversão de sinais analógicos em digitais com maior eficiência", correct: false },
            { text: "Conector de pressão para cabos coaxiais RG-6 em sistemas de TV a cabo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Qual é a composição detalhada dos contatos elétricos do conector RJ-45 Cat5e 41.045?",
        answers: [
            { text: "Contatos com tripla camada: 50 mícrons de ouro sobre 100 mícrons de prata sobre base de bronze fosfórico", correct: true },
            { text: "Contatos de alumínio anodizado com revestimento superficial de aço carbono para uma maior conectividade", correct: false },
            { text: "Contatos de cobre nu maciço sem nenhum tipo de revestimento metálico externo garantindo mais eficiência", correct: false },
            { text: "Contatos de latão industrial com cobertura simples de níquel eletrolítico", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Qual é a vantagem técnica de utilizar a combinação de ouro sobre prata nos contatos do conector?",
        answers: [
            { text: "Aumenta a durabilidade contra oxidação e melhora a condutividade elétrica ao longo do tempo", correct: true },
            { text: "Permite que o conector seja utilizado exclusivamente em aplicações PoE++ de alta voltagem", correct: false },
            { text: "Serve como uma blindagem física que elimina a necessidade de cabos blindados (FTP)", correct: false },
            { text: "Indica que o conector é compatível com portas USB-C e Thunderbolt 3 muito utilizadas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Com qual padrão de desempenho o conector RJ-45 41.045 é compatível e quais sinais suporta?",
        answers: [
            { text: "Padrão Cat5e para voz, dados e vídeo em redes estruturadas de até 1 Gbps", correct: true },
            { text: "Padrão Cat6A exclusivo para transmissões de 10 Gbps em data centers", correct: false },
            { text: "Padrão Cat4 para redes legadas de baixa velocidade e telefonia analógica pura", correct: false },
            { text: "Padrão coaxial BNC com impedância de 75 Ω para sistemas de CFTV analógico", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Para qual processo de montagem o conector RJ-45 Cat5e é projetado?",
        answers: [
            { text: "Crimpagem em cabo UTP utilizando alicate apropriado para fixação dos contatos e da capa", correct: true },
            { text: "Soldagem manual direta dos fios de cobre aos contatos dourados", correct: false },
            { text: "Conexão por parafusos em bloco terminal para facilitar a manutenção rápida e eficiente", correct: false },
            { text: "Acoplamento por indução magnética que dispensa o contato físico entre os metais metálicos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat5e",
        question: "Qual material e característica estrutural definem o corpo do conector Cat6 41.045?",
        answers: [
            { text: "Termoplástico de alto impacto com trava de grande resistência para encaixe firme", correct: true },
            { text: "Metal fundido com cobertura de PVC flexível para maior maleabilidade e movimentos", correct: false },
            { text: "Silicone isolante com propriedades magnéticas para evitar ruídos", correct: false },
            { text: "Borracha antiestática com clips metálicos de fixação manual", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual vantagem um conector Cat6 tem sobre um Cat5e?",
        answers: [
            { text: "Maior capacidade de desempenho elétrico com menor Interferência entre sinais", correct: true },
            { text: "Maior capacidade de desempenho elétrico com foco em aplicações convencionais", correct: false },
            { text: "Capacidade de transmitir sinais ópticos sem conversores", correct: false },
            { text: "Transforma a estrutura física do cabo para eliminar interferências externas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual é a composição dos contatos elétricos do conector RJ-45 Cat6 41-055?",
        answers: [
            { text: "Contatos com tripla camada: 50 mícrons de ouro sobre 100 mícrons de prata sobre base de bronze fosfórico", correct: true },
            { text: "Contatos de alumínio anodizado sobre aço carbono para uma maior condutividade e conectividade mais efetiva", correct: false },
            { text: "Contatos de cobre nu sem revestimento externo garantindo mais eficiência para as aplicações diárias", correct: false },
            { text: "Contatos de latão industrial com cobertura simples de níquel eletrolítico", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "O conector macho RJ-45 Cat6 41.055 ultrapassa quais padrões de desempenho?",
        answers: [
            { text: "Excede os requerimentos EIA/TIA-568 de performance elétrica para Categoria 6", correct: true },
            { text: "Atende apenas padrões analógicos de telefonia de baixa frequência", correct: false },
            { text: "Está certificado para transmissão em fibra óptica monomodo com maiores distâncias", correct: false },
            { text: "Inclui processamento ativo de sinal Ethernet para longas distâncias", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual material e característica estrutural definem o corpo do conector Cat6 41.055?",
        answers: [
            { text: "Termoplástico de alto impacto com trava de grande resistência para encaixe firme", correct: true },
            { text: "Metal fundido com cobertura de PVC flexível para maior maleabilidade e movimentos", correct: false },
            { text: "Silicone isolante com propriedades magnéticas para evitar ruídos", correct: false },
            { text: "Borracha antiestática com clips metálicos de fixação manual", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "O conector Cat6 41-055 é projetado para quais níveis de rede e aplicações?",
        answers: [
            { text: "Redes Fast Ethernet (100 Mbps) e Gigabit Ethernet (1000 Mbps) de alto tráfego", correct: true },
            { text: "Somente redes analógicas de voz e sistemas de telefonia rural de longas distâncias", correct: false },
            { text: "Transmissão de vídeo SD sem necessidade de pares trançados", correct: false },
            { text: "Circuitos de alimentação elétrica AC de alta potência para automação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Em qual tipo de instalação o conector Cat6 41-055 é mais indicado que o Cat5e?",
        answers: [
            { text: "Ambientes com tráfego denso e maiores exigências de integridade de sinal", correct: true },
            { text: "Instalações simplificadas focadas exclusivamente em telefonia analógica", correct: false },
            { text: "Canais de alimentação elétrica 220 V para dispositivos industriais", correct: false },
            { text: "Sistemas de antenas Bluetooth para comunicação sem fio de curto alcance", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho RJ45 GTS Cat6",
        question: "Qual das seguintes situações representa um uso inadequado para o conector Cat6 41-055?",
        answers: [
            { text: "Utilização em um cabo coaxial de TV sem o devido adaptador", correct: true },
            { text: "Montagem de patch cords Gigabit para interligação de switches", correct: false },
            { text: "Instalação em ambiente de rede estruturada com backbone Categoria 6", correct: false },
            { text: "Uso em redes corporativas que utilizam switches gerenciáveis de alta performance", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "O que diferencia o conector 41-065 de um conector RJ-45 Cat6 comum?",
        answers: [
            { text: "A presença de blindagem metálica para proteção contra interferências eletromagnéticas", correct: true },
            { text: "A presença de estrutura metálica voltada à redução de ruídos externos na conexão de rede", correct: false },
            { text: "A redução do número de vias elétricas internas", correct: false },
            { text: "A modificação estrutural do conector para aplicações não padronizadas pelas normas vigentes", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "A qual categoria de cabeamento e norma técnica o conector blindado 41-065 atende?",
        answers: [
            { text: "Categoria 6 (Cat6) atendendo aos requisitos da norma EIA/TIA-568", correct: true },
            { text: "Categoria 5e com tolerância estendida para redes domésticas e corporativas", correct: false },
            { text: "Categoria 6A exclusiva para data centers de 01 Gbps até 10 Gbps", correct: false },
            { text: "Categoria 7 utilizando o padrão de interface GG45", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "O termo STP associado a este conector indica qual característica técnica?",
        answers: [
            { text: "Shielded Twisted Pair, indicando que o conector deve ser usado com cabos blindados", correct: true },
            { text: "Simple Twisted Pair, indicando uma construção sem proteção contra ruído na rede", correct: false },
            { text: "Single Transmission Protocol para redes de baixa complexidade", correct: false },
            { text: "Shielded Terminal Plug, indicando que dispensa aterramento externo de alta proteção", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Por que a blindagem metálica contribui diretamente para um melhor desempenho elétrico?",
        answers: [
            { text: "Porque reduz a Interferência entre sinais e protege o sinal contra interferências externas (EMI/RFI)", correct: true },
            { text: "Porque aumenta a espessura física do cabo garantindo maior rigidez e força mecânica no seu uso diário", correct: false },
            { text: "Porque substitui tecnicamente a necessidade de os pares serem trançados dentro da extensão do cabo", correct: false },
            { text: "Porque atua como um amplificador passivo do sinal elétrico de dados", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual é a composição correta dos contatos elétricos do conector blindado RJ-45 Cat6?",
        answers: [
            { text: "Tripla camada: 50 mícrons de ouro sobre 100 mícrons de prata sobre base de bronze fosfórico", correct: true },
            { text: "Cobre nu sem revestimento para evitar a oxidação galvânica", correct: false },
            { text: "Alumínio anodizado com banho de estanho para redução de custos", correct: false },
            { text: "Latão industrial puro com revestimento polimérico isolante", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual é o papel fundamental do bronze fosfórico na base dos contatos?",
        answers: [
            { text: "Garantir a resistência mecânica (mola) e estabilidade elétrica na conexão", correct: true },
            { text: "Atuar como um isolante térmico para evitar superaquecimento em PoE", correct: false },
            { text: "Servir como a blindagem principal contra interferências magnéticas", correct: false },
            { text: "Substituir a função do ouro na interface de contato com o patch panel", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "O uso do corpo metálico no conector exige atenção obrigatória a qual aspecto?",
        answers: [
            { text: "A necessidade de um aterramento adequado da blindagem em todo o canal", correct: true },
            { text: "O uso obrigatório de cabos UTP (não blindados) para evitar loops", correct: false },
            { text: "A eliminação total do padrão de pinagem T568A ou T568B", correct: false },
            { text: "A aplicação do conector exclusivamente em redes que não possuem switches", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Por que este conector blindado exige o uso de ferramentas específicas para montagem?",
        answers: [
            { text: "Porque depende de crimpagem profissional para fixar os contatos e a continuidade da blindagem", correct: true },
            { text: "Porque utiliza encaixe magnético que dispensa pressão mecânica comum em crimpagens de conectores", correct: false },
            { text: "Porque os contatos não são metálicos e exigem fusão térmica", correct: false },
            { text: "Porque o conector é 'toolless' e não aceita o uso de alicates comuns em sua crimpagem", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual aplicação justifica a escolha deste conector em vez de uma versão sem blindagem?",
        answers: [
            { text: "Ambientes industriais com motores, máquinas ou cabos de alta tensão próximos", correct: true },
            { text: "Ambientes residenciais simples com baixa densidade de dispositivos", correct: false },
            { text: "Redes temporárias de escritório onde a velocidade não é crítica", correct: false },
            { text: "Instalações básicas de telefonia analógica em prédios comerciais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Qual das opções abaixo representa um uso inadequado para o conector RJ-45 41-065?",
        answers: [
            { text: "Tentar realizar a crimpagem em cabos coaxiais de antena de TV", correct: true },
            { text: "Montagem de patch cords blindados para redes Gigabit industriais", correct: false },
            { text: "Instalação em infraestrutura de rede estruturada Cat6 com cabo STP", correct: false },
            { text: "Uso em conexões corporativas de alto tráfego com switches gerenciáveis", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector Macho Blindado RJ45 GTS Cat6",
        question: "Por que o conector macho blindado Cat6 GTS é considerado superior em robustez?",
        answers: [
            { text: "Pela união da proteção metálica externa com contatos de alta durabilidade (ouro/prata)", correct: true },
            { text: "Porque o metal elimina 100% de qualquer perda de pacote em longas distâncias da rede de internet", correct: false },
            { text: "Porque permite a instalação sem seguir normas de pinagem ou cores, sendo mais flexível", correct: false },
            { text: "Porque sua estrutura metálica amplifica o sinal vindo do switch", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Para qual categoria de rede e tipo de cabo o conector 41.075 foi projetado?",
        answers: [
            { text: "Categoria Cat6, indicado para uso com cabos de par trançado não blindado (UTP)", correct: true },
            { text: "Categoria Cat5e, indicado para cabos blindados do tipo S/FTP de redes comuns", correct: false },
            { text: "Categoria Cat6A, exclusivo para ambientes industriais blindados mais exigentes", correct: false },
            { text: "Categoria Cat7, compatível apenas com cabos de fibra óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual a velocidade máxima de transmissão e norma técnica atendida por este conector?",
        answers: [
            { text: "Até 1 Gbps, excedendo os requerimentos da norma EIA/TIA-568", correct: true },
            { text: "Até 10 Gbps em enlaces superiores a 100 metros em redes internas", correct: false },
            { text: "Até 100 Mbps, atendendo eficientemente a norma ISO/IEC 11801 Classe FA", correct: false },
            { text: "Velocidade variável, limitada pela norma IEEE 802.3an", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual é a principal vantagem do sistema Tooless presente neste conector?",
        answers: [
            { text: "Dispensa o uso de ferramentas de crimpagem, tornando a instalação mais rápida e simples", correct: true },
            { text: "Permite a soldagem direta dos condutores aos contatos metálicos garantindo grande tráfego de dados", correct: false },
            { text: "Elimina a necessidade de seguir os padrões de pinagem T568A ou T568B assim definidos", correct: false },
            { text: "Substitui completamente o uso de patch panels em redes estruturadas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual componente interno auxilia na correta organização dos fios durante a montagem?",
        answers: [
            { text: "Suporte IDC com guias de contato no padrão T568", correct: true },
            { text: "Matriz de crimpagem integrada com lâminas metálicas", correct: false },
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
            { text: "1 cm para evitar interferência eletromagnética", correct: false },
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
            { text: "Aplicar pressão com alicate de crimpagem", correct: false },
            { text: "Soldar os condutores para fixação permanente", correct: false },
            { text: "Inserir resina isolante para proteção elétrica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Como é realizada a fixação final do cabo no conector?",
        answers: [
            { text: "Pressionando as tampas plásticas e rosqueando o pino na base do conector", correct: true },
            { text: "Através de trava metálica com aperto por torque controlado e efifaz", correct: false },
            { text: "Utilizando presilhas externas de nylon para garantir maior resistência", correct: false },
            { text: "Por compressão térmica do corpo plástico", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual material é utilizado no corpo plástico do conector para garantir alta resistência?",
        answers: [
            { text: "Termoplástico NEW PC de alta resistência elétrica", correct: true },
            { text: "Policarbonato ABS reciclado com aditivo anti-chama", correct: false },
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
            { text: "30 mícrons de ouro sobre níquel com base de latão", correct: false },
            { text: "Prata pura com núcleo de cobre estanhado", correct: false },
            { text: "Ouro eletrolítico direto sobre aço inoxidável", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Conector RJ45 GTS Cat6 Tooless",
        question: "Qual benefício direto o uso de bronze fosfórico na base dos contatos proporciona?",
        answers: [
            { text: "Maior desempenho elétrico e durabilidade (mola) do contato", correct: true },
            { text: "Redução total da oxidação sem necessidade de revestimento de ouro", correct: false },
            { text: "Flexibilidade mecânica para aplicações móveis", correct: false },
            { text: "Compatibilidade exclusiva com cabos blindados do tipo STP", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Qual velocidade de rede é tipicamente suportada por um Keystone Jack Cat5e corretamente instalado?",
        answers: [
            { text: "Até 1 Gbps em enlaces Ethernet padrão", correct: true },
            { text: "Até 10 Gbps em distâncias acima de 100 metros", correct: false },
            { text: "Limitado a 100 Mbps por definição da categoria", correct: false },
            { text: "Velocidade variável dependendo da cor do conector", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Por que este produto é classificado como um conector fêmea e quantas vias ele possui?",
        answers: [
            { text: "Porque recebe plugs RJ-45 macho e possui 8 vias elétricas (8P8C)", correct: true },
            { text: "Porque transmite sinal de energia e possui 4 vias internas de dados", correct: false },
            { text: "Porque possui pinos expostos e 6 vias com reservas mecânicas", correct: false },
            { text: "Porque substitui conectores em patch cords e possui 10 vias", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Qual a função do revestimento metálico nos contatos e do corpo termoplástico?",
        answers: [
            { text: "Reduzir oxidação, melhorar condutividade e garantir isolamento elétrico/resistência", correct: true },
            { text: "Permitir condução elétrica entre pares e dissipação térmica ativa", correct: false },
            { text: "Elevar e aumentar a espessura para funcionar como blindagem eletromagnética", correct: false },
            { text: "Atuar como ímã interno para alinhamento de pinos de silicone", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Onde este Keystone Jack pode ser instalado e qual a vantagem do seu padrão físico?",
        answers: [
            { text: "Em espelhos de parede, patch panels e racks; oferecendo modularidade e padrão universal", correct: true },
            { text: "Somente em placas de parede soldadas; com formato proprietário exclusivo e dentro das normas exigidas", correct: false },
            { text: "Apenas em switches gerenciáveis; com formato híbrido RJ-45/RJ-11", correct: false },
            { text: "Exclusivamente em ambientes externos; com antena integrada no módulo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Por que a correta terminação do cabo no Keystone é essencial em redes estruturadas?",
        answers: [
            { text: "Para garantir desempenho, reduzir perdas de sinal e evitar erros de conexão", correct: true },
            { text: "Apenas para garantir a estética e organização do rack e ter melhor definição visual", correct: false },
            { text: "Para aumentar o consumo de energia e a voltagem do enlace", correct: false },
            { text: "Para permitir o funcionamento do cabo sem seguir um padrão de pinagem", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "Qual cenário de uso é o mais adequado para o Keystone Jack Cat5e 31.090BK?",
        answers: [
            { text: "Redes residenciais, comerciais e corporativas que utilizam cabeamento Cat5e", correct: true },
            { text: "Redes de longa distância baseadas em fibra óptica monomodo que alcança longa distâncias", correct: false },
            { text: "Sistemas industriais de alta potência elétrica e motores", correct: false },
            { text: "Backbones metropolitanos de operadoras de telecomunicações", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat5e Conector Fêmea",
        question: "O que as imagens e especificações indicam sobre o padrão de montagem deste Keystone?",
        answers: [
            { text: "Formato universal Keystone compatível com espelhos de parede de diversos fabricantes", correct: true },
            { text: "Necessidade de soldagem direta na placa-mãe do switch para garantir melhor tráfego", correct: false },
            { text: "Uso obrigatório de resina isolante após a crimpagem para ter maior aderência e bom uso", correct: false },
            { text: "Conector compatível apenas com cabos coaxiais de TV", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Qual é a principal finalidade do Keystone Jack RJ-45 Cat6?",
        answers: [
            { text: "Permitir terminação e conexão de cabos de rede Cat6 em painéis, tomadas e adaptadores modulares", correct: true },
            { text: "Permitir terminação e conexão de cabos de rede em painéis e módulos estruturados e bem montados", correct: false },
            { text: "Servir como repetidor ativo de sinal Ethernet até 100 metros", correct: false },
            { text: "Realizar controle e gerenciamento de potência PoE nos dispositivos finais para garantir tráfego", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "O que garante o alto desempenho em redes Gigabit neste Keystone Jack Cat6?",
        answers: [
            { text: "Uso de placa de circuito impresso (PCB) moderna e contatos com tripla camada metálica", correct: true },
            { text: "Revestimento de plástico PVC com blindagem magnética integrada nas 8 vias de sua estrutura", correct: false },
            { text: "Presença de um módulo com processador de sinal digital (DSP) interno", correct: false },
            { text: "Filtro RF ativo incluso para limitar o ruído em baixas frequências", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Quais materiais compõem a tripla camada dos contatos elétricos deste Keystone?",
        answers: [
            { text: "Bronze fosfórico, prata e ouro, oferecendo alta condutividade e resistência à oxidação", correct: true },
            { text: "Alumínio, níquel e estanho, escolhidos pela flexibilidade mecânica e eficiência tecnológica", correct: false },
            { text: "Cobre nu revestido apenas com verniz isolante para proteção térmica para melhor tráfego", correct: false },
            { text: "Ligas de prata intensificadas com grafeno para ultra-condução", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Qual a vantagem logística e técnica de utilizar o padrão Keystone na infraestrutura?",
        answers: [
            { text: "Garante modularidade, facilitando a organização e troca rápida de módulos em painéis", correct: true },
            { text: "Executa funções de roteamento sem a necessidade de switches centrais na rede ethernet", correct: false },
            { text: "Amplifica o sinal de rede passivamente para distâncias superiores a 200 metros", correct: false },
            { text: "Substitui a necessidade de cabos de backbone metálicos entre racks", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Como o Keystone Jack Cat6 é fisicamente instalado?",
        answers: [
            { text: "Encaixado por pressão na abertura padrão universal de espelhos de parede e patch panels", correct: true },
            { text: "Soldado em adaptadores SMD antes da fixação no espelho de parede para melhor desempenho", correct: false },
            { text: "Fixado obrigatoriamente com parafusos de aterramento em caixas de metal", correct: false },
            { text: "Conectado via interface DB-25 em blocos de terminação do tipo 110 IDC", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Por que a cor branca e o formato deste modelo (31.100WH) são relevantes para o instalador?",
        answers: [
            { text: "O formato universal permite o encaixe em diversos fabricantes e a cor branca mantém a estética de espelhos de parede padrão", correct: true },
            { text: "A cor branca indica que o conector possui blindagem eletromagnética superior as demais cores disponíveis", correct: false },
            { text: "O formato retangular permite a transferência de corrente elétrica PoE extra garantindo uma rede com maior eficiência", correct: false },
            { text: "A cor branca reflete o calor, aumentando a performance da rede em 15%", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "A presença de uma placa de circuito impresso (PCB) interna indica o quê?",
        answers: [
            { text: "Que o conector foi projetado para maior estabilidade e redução de Interferência eletromagnética em altas frequências", correct: true },
            { text: "Que o conector possui componentes ativos para amplificação de sinal da mesma forma que um repetidor eletrônico", correct: false },
            { text: "Que o conector pode gerenciar endereços IP como um mini-switch", correct: false },
            { text: "Que o dispositivo funciona como um ponto de acesso Wi-Fi integrado", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Keystone Jack RJ-45 GTS Cat6 Conector Fêmea",
        question: "Qual cenário representa o uso ideal para este conector fêmea Cat6?",
        answers: [
            { text: "Redes corporativas e comerciais de alto tráfego Cat6", correct: true },
            { text: "Conexões elétricas residenciais de 220V para automação", correct: false },
            { text: "Sistemas de telefonia analógica legada em prédios antigos", correct: false },
            { text: "Interligação direta de backbones industriais de fibra óptica", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "O termo “IDC 110” está relacionado principalmente a qual característica?",
        answers: [
            { text: "Tipo de bloco de terminação e lâmina compatível usada para inserir fios em conexões", correct: true },
            { text: "Tipo de sistema de terminação utilizado em blocos de conexão de redes de comunicação", correct: false },
            { text: "Norma de velocidade de transmissão de 1 Gbps", correct: false },
            { text: "Classificação estrutural aplicada a conectores especiais de telecomunicações", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Qual é a principal função do Alicate de Inserção IDC 110 no cabeamento estruturado?",
        answers: [
            { text: "Inserir e cortar fios em blocos IDC 110 de patch panels e keystones", correct: true },
            { text: "Crimpar terminais RJ-45 diretamente sem a necessidade de corte de fios de cobre", correct: false },
            { text: "Soldar fios de rede a conectores metálicos para evitar oxidação", correct: false },
            { text: "Medir a impedância e continuidade do cabo de rede durante a instalação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Como a ferramenta realiza o corte dos fios durante o processo de inserção?",
        answers: [
            { text: "A lâmina corta o excesso do fio automaticamente após ele ser empurrado para o fundo do bloco IDC", correct: true },
            { text: "O alicate tritura o fio antes da inserção para reduzir a tensão mecânica que existe nos materiais de conexão", correct: false },
            { text: "A lâmina funde o fio ao conector através de calor gerado por fricção", correct: false },
            { text: "A lâmina realiza uma micro-perfuração no metal de contato para soldagem a frio de maneira eficiente", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Por que o Alicate de Inserção IDC 110 é tecnicamente chamado de ferramenta ‘Punch Down’?",
        answers: [
            { text: "Porque utiliza um sistema de impacto para empurrar o fio nos terminais e cortá-lo simultaneamente", correct: true },
            { text: "Porque utiliza um laser de baixa potência para selar o fio no conector plástico e garantir melhor conexão", correct: false },
            { text: "Porque amassa a capa externa do cabo para garantir a fixação sem cortar o condutor que existe dentro dele", correct: false },
            { text: "Porque perfura os contatos metálicos com uma microbroca rotativa", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Qual característica do cabo e da construção da ferramenta favorece o uso prolongado?",
        answers: [
            { text: "O cabo anatômico que garante maior conforto e controle manual ao instalador", correct: true },
            { text: "A lâmina de corte temperada que dispensa o uso de força física", correct: false },
            { text: "Os dentes de crimpagem integrados que distribuem o peso da ferramenta", correct: false },
            { text: "O guia de medição embutido que automatiza o posicionamento dos fios de conexão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "O que significa o recurso de lâmina ‘removível e intercambiável’ nesta ferramenta?",
        answers: [
            { text: "Permite a substituição por desgaste ou a troca por outros padrões de lâmina (como a 66)", correct: true },
            { text: "Permite estender a lâmina para medir a profundidade do conduíte", correct: false },
            { text: "Controla a velocidade da crimpagem através de um ajuste de comprimento fixo bem definido", correct: false },
            { text: "Possibilita trocar o cabo anatômico por um cabo de teste ativo", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Qual recurso mecânico permite regular a força de inserção do fio no bloco IDC?",
        answers: [
            { text: "O ajuste de impacto (Hi/Lo), que regula a pressão da mola interna", correct: true },
            { text: "A transmissão de dados digital via sensor piezoelétrico no gatilho", correct: false },
            { text: "O diagnóstico automático de continuidade por LED no corpo da ferramenta", correct: false },
            { text: "O sistema de antena Wi-Fi que monitora a pressão da mão do técnico", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Para que serve o compartimento localizado na parte posterior do alicate?",
        answers: [
            { text: "Para o armazenamento de uma lâmina sobressalente ou de outro padrão", correct: true },
            { text: "Para travar o cabo UTP enquanto se realiza a decapagem da via de forma eficaz", correct: false },
            { text: "Para abrigar baterias que alimentam uma lanterna LED auxiliar", correct: false },
            { text: "Para guardar o manual de instruções e tabelas de pinagem T568A/B bem definidas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Por que a precisão da lâmina no padrão IDC 110 é crítica para a integridade da rede?",
        answers: [
            { text: "Para garantir que o fio se aloje corretamente no terminal sem danificar as 'fendas' do bloco", correct: true },
            { text: "Para garantir que ocorra a transmissão de sinal óptico pelo núcleo de cobre mantendo a eficácia de transmissão", correct: false },
            { text: "Para definir eletronicamente a velocidade de 10 Gbps no enlace instalado e bem estruturado", correct: false },
            { text: "Para incorporar automaticamente uma blindagem metálica ao redor do contato fêmea", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção IDC 110 GTS",
        question: "Em quais componentes de rede este alicate é utilizado com maior frequência?",
        answers: [
            { text: "Patch panels e Keystone Jacks que possuam terminais de conexão traseira tipo 110", correct: true },
            { text: "Conectores de fibra óptica do tipo LC ou SC para emendas mecânicas eficientes e bem definidas", correct: false },
            { text: "Conectores coaxiais BNC e RG-6 em sistemas de rádio frequência", correct: false },
            { text: "Módulos de tomada USB e HDMI para automação residencial", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Qual é a principal finalidade do Alicate de Inserção para Telefonia Tipo Borgoa?",
        answers: [
            { text: "Inserir e cortar fios em blocos de terminação usados em sistemas de telefonia", correct: true },
            { text: "Inserir e fixar fios em blocos de conexão utilizados em sistemas telefônicos", correct: false },
            { text: "Crimpar conectores RJ-45 em cabos de rede", correct: false },
            { text: "Realizar medições elétricas completas em infraestruturas de telecomunicações", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "O termo “Tipo Borgoa” está relacionado a quê no contexto de telecomunicações?",
        answers: [
            { text: "Ao padrão de lâmina e ao tipo de bloco de terminação (IDC) utilizado em telefonia", correct: true },
            { text: "A uma nova categoria de cabeamento de rede para tráfego Gigabit", correct: false },
            { text: "A um protocolo de comunicação digital exclusivo para telefonia IP (VoIP) e utiliza SIP", correct: false },
            { text: "A um tipo específico de conector coaxial para sistemas de rádio frequência", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Em quais infraestruturas o alicate Tipo Borgoa é a ferramenta de uso padrão?",
        answers: [
            { text: "Sistemas de telefonia analógica, blocos de distribuição e centrais PABX", correct: true },
            { text: "Redes de dados de alta performance como Cat6A e Cat7 que oferecem grande tráfego de dados", correct: false },
            { text: "Redes de backbone que utilizam fibras ópticas monomodo", correct: false },
            { text: "Sistemas de distribuição de TV a cabo e antenas UHF/VHF", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Como o alicate realiza a conexão e o acabamento dos fios no bloco terminal?",
        answers: [
            { text: "Através de impacto que empurra o fio no contato e corta o excesso automaticamente", correct: true },
            { text: "Derretendo a isolação do fio através de indução térmica controlada e direcionada", correct: false },
            { text: "Pressionando o fio contra o terminal para posterior soldagem manual", correct: false },
            { text: "Prendendo o condutor através de parafusos de pressão ajustáveis", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Por que o corte automático do excesso de fio é uma função crítica nesta ferramenta?",
        answers: [
            { text: "Para não deixar pontas de fio que encostem umas nas outras, causando curto ou interferência na ligação", correct: true },
            { text: "Apenas para garantir que a estética do DG (Distribuidor Geral) seja mantida em todo o procedimento de uso", correct: false },
            { text: "Para aumentar a tensão elétrica e a potência do sinal na linha telefônica", correct: false },
            { text: "Para preparar o terminal para futuras transmissões de dados em alta velocidade", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Qual característica construtiva da ferramenta GTS favorece trabalhos de grande escala?",
        answers: [
            { text: "Design ergonômico focado em reduzir a fadiga durante terminações repetitivas", correct: true },
            { text: "Revestimento metálico condutivo para auxiliar no teste de sinal", correct: false },
            { text: "Estrutura rígida sem áreas de apoio para aumentar a força de impacto e tração", correct: false },
            { text: "Sistema de ventilação interna para resfriar a lâmina durante o uso", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Que tipo de condutor é compatível com o sistema de inserção Borgoa?",
        answers: [
            { text: "Fios de cobre sólido com bitola adequada para encaixe por pressão nos contatos", correct: true },
            { text: "Cabos de fibra óptica com revestimento primário de acrílico", correct: false },
            { text: "Cabos coaxiais de malha dupla para sistemas de vídeo e CFTV", correct: false },
            { text: "Cabos USB blindados para interligação de periféricos de informática", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Qual é o principal risco de utilizar ferramentas inadequadas em blocos de telefonia?",
        answers: [
            { text: "Danos permanentes aos contatos metálicos e geração de falhas intermitentes no sinal", correct: true },
            { text: "Aumento não planejado da velocidade de transmissão da linha analógica gerando falhas", correct: false },
            { text: "Conversão acidental do sinal analógico da operadora em sinal digital IP", correct: false },
            { text: "Criação de uma blindagem natural contra ruídos eletromagnéticos externos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Por que este alicate não deve ser utilizado em instalações de redes de dados (Ethernet)?",
        answers: [
            { text: "Porque sua lâmina é específica para o perfil dos blocos de telefonia e não se ajusta aos blocos IDC 110", correct: true },
            { text: "Porque ferramentas de impacto de telefonia limitam a velocidade da rede a 10 Mbps e não consegue ser maior que isso", correct: false },
            { text: "Porque a ferramenta Borgoa é incompatível com condutores feitos de cobre", correct: false },
            { text: "Porque redes de dados exigem obrigatoriamente conectores ópticos e emendas por fusão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de Inserção para Telefonia Tipo Borgoa GTS",
        question: "Qual prática garante a longevidade da ferramenta e a qualidade da conexão?",
        answers: [
            { text: "Garantir o alinhamento perpendicular da lâmina em relação ao bloco antes do disparo", correct: true },
            { text: "Aplicar força física extra sobre o cabo anatômico após o estalo do impacto então executado", correct: false },
            { text: "Dobrar o fio em formato de 'U' antes de posicioná-lo no terminal do bloco", correct: false },
            { text: "Utilizar o bico da lâmina para cortar capas externas de cabos multipares", correct: false }
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
            { text: "Porque prensa mecanicamente os contatos do conector contra os condutores do cabo para dar contato", correct: true },
            { text: "Porque derrete o isolamento do fio para garantir a fixação térmica e o melhor controle de temperatura", correct: false },
            { text: "Porque corta e insere fios por impacto em blocos de rede", correct: false },
            { text: "Porque realiza a conexão sem a necessidade de contato físico entre metais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual a diferença técnica entre RJ11 e RJ45 no uso desta ferramenta?",
        answers: [
            { text: "Ambos usam o mesmo princípio de pressão, mas o RJ11 tem menos vias que o RJ45", correct: true },
            { text: "O RJ11 exige soldagem interna enquanto o RJ45 é apenas por pressão", correct: false },
            { text: "O RJ45 funciona com cabos coaxiais e o RJ11 com pares trançados", correct: false },
            { text: "O RJ11 é usado apenas para fibra óptica e o RJ45 para cobre", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Como o sistema de catraca garante a qualidade da crimpagem?",
        answers: [
            { text: "Impede que o alicate abra antes de atingir a pressão total, garantindo uma conexão uniforme", correct: true },
            { text: "Ajusta automaticamente a pinagem dos fios no padrão T568A ou T568B", correct: false },
            { text: "Aumenta a flexibilidade do cabo após a fixação do conector, facilitando o manuseio durante a instalação", correct: false },
            { text: "Permite que o alicate funcione sem que o usuário precise aplicar força manual", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual a importância do cabo emborrachado e do design ergonômico nesta ferramenta?",
        answers: [
            { text: "Garantir aderência e reduzir a fadiga do técnico em trabalhos repetitivos de grande escala", correct: true },
            { text: "Atuar como um isolante para crimpagem em cabos energizados de alta tensão", correct: false },
            { text: "Aumentar a rigidez da ferramenta para permitir o corte eficiente de arames de aço com maior precisão", correct: false },
            { text: "Melhorar a condução elétrica entre a mão do operador e o conector", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Por que a precisão mecânica do corpo metálico é essencial neste modelo profissional?",
        answers: [
            { text: "Para garantir que os pinos do conector perfurem os condutores de forma centralizada e correta", correct: true },
            { text: "Para permitir que o alicate transmita luz através do cabo de cobre", correct: false },
            { text: "Para reduzir o peso da ferramenta utilizando alumínio oco na estrutura", correct: false },
            { text: "Para evitar que o conector aqueça excessivamente durante o processo de prensagem", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Em quais tipos de cenário este alicate é a ferramenta de uso padrão?",
        answers: [
            { text: "Instalações de redes de dados Ethernet e sistemas de telefonia analógica ou digital", correct: true },
            { text: "Emendas de cabos de fibra óptica e conectores de alta frequência BNC", correct: false },
            { text: "Montagem de quadros elétricos e sistemas de CFTV com cabos coaxiais", correct: false },
            { text: "Configuração de antenas parabólicas e roteadores Wi-Fi sem fio, garantindo conectividade estável", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual das situações abaixo representa um uso inadequado ou tecnicamente incorreto desta ferramenta?",
        answers: [
            { text: "Tentar crimpar conectores coaxiais de TV ou conectores de fibra óptica", correct: true },
            { text: "Utilizar a ferramenta para montar patch cords de rede Cat5e ou Cat6", correct: false },
            { text: "Crimpar conectores RJ11 em cabos telefônicos lisos ou trançados", correct: false },
            { text: "Usar as lâminas internas do alicate para cortar ou decapar cabos UTP", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual prática de montagem garante o sucesso da conexão antes de acionar a catraca?",
        answers: [
            { text: "Verificar se as pontas dos fios chegaram ao fim do conector e estão na ordem correta", correct: true },
            { text: "Aplicar óleo lubrificante nos pinos do conector para facilitar a entrada", correct: false },
            { text: "Dobrar os fios em formato de “V” para que ocupem mais espaço dentro do conector, garantindo boa acomodação", correct: false },
            { text: "Acionar a catraca rapidamente para que o impacto seja mais forte", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca e cabo emborrachado GTS",
        question: "Qual é o principal problema causado por uma crimpagem incompleta ou mal feita?",
        answers: [
            { text: "Mau contato elétrico, gerando quedas de rede e falhas intermitentes", correct: true },
            { text: "Aumento descontrolado da velocidade de transmissão do sinal", correct: false },
            { text: "Transformação do sinal de cobre em sinal de rádio frequência (Wi-Fi)", correct: false },
            { text: "Criação de uma proteção natural contra qualquer tipo de interferência", correct: false }
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
        question: "O que caracteriza tecnicamente este alicate como uma ferramenta 'Profissional'?",
        answers: [
            { text: "Sua construção robusta em metal, sistema de catraca para pressão constante e matriz de alta precisão", correct: true },
            { text: "A capacidade de funcionar de forma automática sem aplicação de força manual", correct: false },
            { text: "O fato de possuir testadores de continuidade e analisadores de protocolo integrados", correct: false },
            { text: "Uso exclusivo em cabos de fibra óptica e blindagens industriais, assegurando maior eficiência e confiabilidade", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual é o principal diferencial da matriz de crimpagem do modelo 21-040 em relação aos alicates comuns?",
        answers: [
            { text: "A inclusão da entrada para conectores RJ9 (4 vias), usados em fones e headsets", correct: true },
            { text: "O suporte para conectores BNC e conectores F de sistemas de TV", correct: false },
            { text: "A entrada universal para cabos USB-C e conectores HDMI", correct: false },
            { text: "Capacidade de crimpar apenas conectores blindados da categoria Cat7, garantindo desempenho adequado.", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual é a principal diferença prática entre os conectores RJ9, RJ11 e RJ45 suportados por este alicate?",
        answers: [
            { text: "A quantidade de vias (4, 6 e 8 respectivamente) e suas aplicações em headsets, telefonia e redes", correct: true },
            { text: "O material plástico utilizado na fabricação de cada um dos conectores", correct: false },
            { text: "A necessidade de usar ferramentas de impacto diferentes para cada um", correct: false },
            { text: "O fato de o RJ9 ser o único padrão compatível com fibras ópticas, garantindo adequação técnica para a aplicação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Como o sistema de catraca ajuda a padronizar a qualidade da instalação?",
        answers: [
            { text: "Ele impede a abertura do alicate antes que a pressão ideal de crimpagem tenha sido atingida", correct: true },
            { text: "Ele aumenta a velocidade de transmissão de dados no cabo finalizado, proporcionando eficiência", correct: false },
            { text: "Ele corrige automaticamente a ordem dos fios caso o técnico os insira errado", correct: false },
            { text: "Ele corta o cabo automaticamente se houver alguma via interrompida", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Por que a construção robusta e ergonômica é vital para o profissional de cabeamento?",
        answers: [
            { text: "Para suportar o esforço mecânico repetitivo e garantir conforto em jornadas de trabalho extensas", correct: true },
            { text: "Para permitir que o alicate seja utilizado como ferramenta de medição de sinal", correct: false },
            { text: "Para garantir que o sinal de rede passe de 100 Mbps para 1000 Mbps, assegurando capacidade de transmissão", correct: false },
            { text: "Para que o alicate possa ser utilizado em instalações elétricas de média tensão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Em qual cenário este alicate 3 em 1 (RJ9/11/45) oferece a melhor vantagem competitiva?",
        answers: [
            { text: "Ambientes de manutenção de TI e Call Centers, onde se lida com redes, telefones e fones de ouvido", correct: true },
            { text: "Instalações de backbones metropolitanos utilizando exclusivamente fibras monomodo", correct: false },
            { text: "Instalação doméstica simples de apenas um ponto de internet Wi-Fi, atendendo a necessidades básicas de conectividade", correct: false },
            { text: "Montagem de sistemas de segurança que utilizam apenas cabos coaxiais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual problema técnico é evitado ao usar o encaixe específico de RJ9 deste alicate profissional?",
        answers: [
            { text: "Evita o mau contato e falhas de áudio em headsets por falta de pressão correta nos pinos", correct: true },
            { text: "Evita que a rede perca pacotes em transmissões de vídeo 4K", correct: false },
            { text: "Evita a queima do switch por excesso de tensão nos pares de dados", correct: false },
            { text: "Evita que o cabo UTP sofra interferência eletromagnética externa, preservando a integridade do sinal", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual prática é essencial para garantir uma crimpagem perfeita com este modelo?",
        answers: [
            { text: "Verificar o alinhamento total dos fios no fundo do conector antes de fechar a catraca", correct: true },
            { text: "Aplicar força máxima mesmo após o alicate destravar a catraca, garantindo a prensagem completa", correct: false },
            { text: "Dobrar os condutores de cobre para que fiquem mais grossos dentro do pino", correct: false },
            { text: "Lixar os contatos metálicos do conector antes da inserção no alicate", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Alicate de crimpar com catraca, profissional GTS",
        question: "Qual a vantagem do alicate 21-040 sobre modelos que crimpam apenas RJ45?",
        answers: [
            { text: "Versatilidade para atender todas as demandas de conectividade modular em uma única ferramenta", correct: true },
            { text: "Garantia de que o cabo não precisará ser testado após a crimpagem", correct: false },
            { text: "Capacidade de crimpar conectores sem a necessidade de decapar o cabo, otimizando a instalação", correct: false },
            { text: "Redução do custo da infraestrutura por utilizar menos pares trançados", correct: false }
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
            { text: "Aplicar blindagem metálica adicional ao cabo, reforçando a proteção contra interferências eletromagnéticas externas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Qual o principal benefício técnico de utilizar o decapador especializado 21-050 em vez de ferramentas genéricas?",
        answers: [
            { text: "Garantir uma decapagem precisa que preserva a integridade dos condutores internos e evita cortes acidentais", correct: true },
            { text: "Garantir que o cabo receba um revestimento extra de proteção contra raios UV", correct: false },
            { text: "Remover apenas a blindagem de fios coaxiais preservando a capa plástica externa", correct: false },
            { text: "Aumentar automaticamente a velocidade de transmissão de dados do cabo para até 10 Gbps garantindo maior desempenho.", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Por qual motivo é fundamental expor os fios no comprimento correto antes da conectorização?",
        answers: [
            { text: "Para permitir que os condutores cheguem ao fundo do conector e assegurem o contato elétrico e a fixação mecânica ideal", correct: true },
            { text: "Para reduzir o diâmetro total do cabo facilitando a passagem por conduítes estreitos", correct: false },
            { text: "Para permitir que o instalador adicione uma camada de solda em cada ponta de cobre", correct: false },
            { text: "Para fazer com que o cabo suporte tensões elétricas de alta voltagem sem derreter, oferecendo maior resistência térmica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "O que define a compatibilidade do Decapador 21-050 com cabos do tipo UTP?",
        answers: [
            { text: "Sua lâmina ajustada para cabos de par trançado sem blindagem (Unshielded Twisted Pair)", correct: true },
            { text: "Sua capacidade de decapar fibras ópticas monomodo com revestimento acrílico", correct: false },
            { text: "Sua compatibilidade exclusiva com cabos coaxiais do tipo RG-6 e RG-59", correct: false },
            { text: "Sua estrutura projetada para decapar cabos elétricos de alta tensão com dupla isolação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Por que decapar o cabo de rede manualmente (com estiletes ou facas) é considerado uma má prática?",
        answers: [
            { text: "Porque há alto risco de ferir o isolamento dos fios internos, gerando perda de pacotes ou falhas na rede", correct: true },
            { text: "Porque o corte manual transforma instantaneamente o cabo UTP em um cabo de categoria inferior", correct: false },
            { text: "Porque retira a blindagem magnética que todos os cabos UTP possuem internamente", correct: false },
            { text: "Porque impede que o cabo seja reconhecido por switches gerenciáveis, comprometendo a conexão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Qual é o procedimento essencial a ser realizado imediatamente após o uso do decapador?",
        answers: [
            { text: "Organizar, destrançar parcialmente e alinhar os fios conforme o padrão de pinagem (T568A ou T568B)", correct: true },
            { text: "Enrolar fita isolante nos fios expostos para garantir que não encostem uns nos outros", correct: false },
            { text: "Aplicar calor nas pontas dos fios para facilitar a entrada no conector RJ-45, melhorando o encaixe dos condutores", correct: false },
            { text: "Conectar o cabo diretamente à porta do computador para testar o sinal antes de crimpar", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Ao utilizar o Decapador 21-050, qual técnica de manuseio garante o melhor resultado?",
        answers: [
            { text: "Girar a ferramenta ao redor do cabo aplicando apenas a pressão necessária para marcar e retirar a capa", correct: true },
            { text: "Pressionar a ferramenta com força máxima para garantir que o corte chegue até o cobre", correct: false },
            { text: "Dobrar o cabo em um ângulo de 90 graus antes de inserir na lâmina de corte, assegurando maior eficiência do processo", correct: false },
            { text: "Puxar o cabo violentamente enquanto a ferramenta estiver fechada para rasgar a isolação", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Decapador de Cabo UTP GTS",
        question: "Em qual fase do cronograma de instalação de cabeamento estruturado o decapador é utilizado?",
        answers: [
            { text: "Na etapa de preparação para a terminação, seja em conectores RJ-45, Patch Panels ou Keystones", correct: true },
            { text: "Na fase final de certificação e teste de continuidade elétrica do enlace", correct: false },
            { text: "Durante o lançamento dos cabos (passagem) por dentro de calhas e eletrodutos", correct: false },
            { text: "Apenas quando o cabo apresenta defeitos e precisa ser emendado com fita isolante", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual é a principal função de um patch cord de rede?",
        answers: [
            { text: "Interligar equipamentos de rede, como computadores, switches e roteadores", correct: true },
            { text: "Interligar ferramentas da rede em pontos próximos da infraestrutura", correct: false },
            { text: "Fornecer exclusivamente energia elétrica à porta PoE", correct: false },
            { text: "Atuar como cabo de fibra óptica em links de longa distância", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "O que caracteriza tecnicamente o Patch Cord GTS sob a especificação Cat5e?",
        answers: [
            { text: "Atende requisitos de desempenho para redes Ethernet de até 1 Gbps (Gigabit)", correct: true },
            { text: "É uma categoria estendida exclusiva para tráfego de voz analógica", correct: false },
            { text: "Possui 5 vias de cobre sólido para transmissão de sinal de TV", correct: false },
            { text: "Trata-se de um padrão de fibra óptica multimodo para curtas distâncias", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual é a principal vantagem de utilizar um patch cord pronto (injetado) em vez de um montado manualmente no local?",
        answers: [
            { text: "Garantia de que o cabo foi testado em fábrica quanto à continuidade e performance elétrica", correct: true },
            { text: "O cabo injetado ajusta seu comprimento automaticamente conforme a distância", correct: false },
            { text: "Ele possui um sistema interno que dobra os pares para anular interferências", correct: false },
            { text: "Dispensa a necessidade de alinhar os fios nos padrões T568A ou T568B", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Por que a organização por cores é recomendada em racks e data centers?",
        answers: [
            { text: "Para facilitar a identificação visual de diferentes serviços ou segmentos de rede", correct: true },
            { text: "Porque algumas cores possuem uma frequência que aumenta a velocidade dos dados", correct: false },
            { text: "Para indicar que o cabo possui blindagem contra interferência eletromagnética", correct: false },
            { text: "Para garantir compatibilidade com switches de fabricantes específicos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual o impacto de utilizar um patch cord de comprimento adequado (ex: 2,5m) em vez de cabos excessivamente longos?",
        answers: [
            { text: "Evita o acúmulo de sobras de cabos, melhorando a ventilação do rack e reduzindo interferências", correct: true },
            { text: "Aumenta a velocidade de transmissão da porta para 10 Gbps", correct: false },
            { text: "Transforma o sinal elétrico em sinal óptico para evitar perdas, garantindo integridade do sinal", correct: false },
            { text: "Elimina a necessidade de utilizar patch panels na infraestrutura", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Quais conectores são encontrados nas extremidades do Patch Cord Cat5e GTS?",
        answers: [
            { text: "Conectores RJ45 macho em ambas as extremidades", correct: true },
            { text: "Um conector RJ11 para telefone e um RJ45 para o switch", correct: false },
            { text: "Conectores USB-C para conexão direta em notebooks modernos", correct: false },
            { text: "Conectores SC ou LC para interfaces de fibra óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual fator físico pode comprometer o desempenho máximo deste patch cord?",
        answers: [
            { text: "Dobras excessivas (vincos) ou tração mecânica que danifique a torção dos pares internos", correct: true },
            { text: "A utilização de etiquetas de identificação presas ao corpo do cabo", correct: false },
            { text: "Conectar o cabo em um switch de cor diferente da capa do patch cord, auxiliando na identificação da conexão", correct: false },
            { text: "O uso de patch cords de cores variadas no mesmo patch panel", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual das seguintes situações representa um uso INCORRETO deste produto?",
        answers: [
            { text: "Tentar utilizá-lo como link de fibra óptica entre dois conversores de mídia", correct: true },
            { text: "Conectar um computador pessoal a uma tomada de rede na parede", correct: false },
            { text: "Interligar um Patch Panel a um Switch dentro de um rack metálico", correct: false },
            { text: "Conectar um Access Point (AP) para fornecer sinal Wi-Fi", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Como a durabilidade do Patch Cord pode ser estendida durante a manutenção?",
        answers: [
            { text: "Respeitando o raio de curvatura e evitando que o cabo fique sob tensão esticada", correct: true },
            { text: "Removendo a capa externa para garantir que os fios não estão oxidados", correct: false },
            { text: "Limpando os contatos metálicos com fita isolante regularmente, mantendo o contato funcional", correct: false },
            { text: "Enrolando o cabo em volta de cabos de energia para estabilizar o sinal", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat5e GTS",
        question: "Qual a principal diferença técnica entre os patch cords Cat5e e Cat6?",
        answers: [
            { text: "O Cat6 possui requisitos mais rígidos contra ruído e suporta frequências maiores", correct: true },
            { text: "O Cat5e é o único que permite a passagem de energia via PoE, possibilitando a alimentação de dispositivos pela própria rede", correct: false },
            { text: "O Cat6 não utiliza o conector padrão RJ45, exigindo adaptadores", correct: false },
            { text: "O Cat5e suporta apenas 100 Mbps, enquanto o Cat6 suporta 1 Gbps", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual é a capacidade de transmissão de dados suportada por Patch Cord Cat6 de 1,5m e 2,5m?",
        answers: [
            { text: "Suportam transmissões de até 10 Gbps devido ao curto comprimento e alta performance da categoria", correct: true },
            { text: "São limitados a 100 Mbps por serem cabos de conexão curta", correct: false },
            { text: "Suportam apenas sinais analógicos de telefonia por não possuírem pares trançados", correct: false },
            { text: "Atuam exclusivamente na transmissão de sinais de vídeo analógico (CFTV)", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual é a principal função de um patch cord em uma rede estruturada?",
        answers: [
            { text: "Interligar equipamentos e pontos de rede de forma prática e padronizada", correct: true },
            { text: "Substituir a necessidade de switches e roteadores na rede", correct: false },
            { text: "Converter o sinal elétrico do cabo de cobre em sinal óptico, permitindo a transmissão por fibra", correct: false },
            { text: "Aumentar a velocidade da rede acima do limite da placa de rede", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual a principal vantagem técnica da Categoria 6 (Cat6) em relação à Cat5e?",
        answers: [
            { text: "Maior largura de banda e melhor desempenho contra interferências", correct: true },
            { text: "Suporte exclusivo para conexões de telefonia analógica antiga", correct: false },
            { text: "Utilização de conectores GG45 em vez do padrão RJ45", correct: false },
            { text: "A capacidade de transmitir sinal de TV a cabo sem adaptadores", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Por que a especificação de comprimento (como o de 2,5m) é importante na organização de um rack?",
        answers: [
            { text: "Para evitar sobras excessivas que prejudicam a ventilação e a organização dos cabos", correct: true },
            { text: "Porque o comprimento define se o cabo é de categoria 6 ou categoria 5", correct: false },
            { text: "Porque cabos mais curtos aumentam fisicamente a velocidade de tráfego", correct: false },
            { text: "Para permitir que o cabo funcione sem a necessidade de patch panels", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Por que o uso de conectores RJ45 macho é o padrão absoluto para patch cords?",
        answers: [
            { text: "Porque permitem a conexão direta em portas de switches, roteadores e patch panels", correct: true },
            { text: "Porque este tipo de conector permite a soldagem fria dos pares internos", correct: false },
            { text: "Porque são os únicos que suportam a transmissão de sinais via fibra óptica", correct: false },
            { text: "Porque evitam que o técnico precise alinhar os fios nos padrões T568A/B", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual a vantagem de utilizar patch cords coloridos na identificação da rede?",
        answers: [
            { text: "Facilitar a gestão visual e a separação de serviços (ex: dados, voz, câmeras)", correct: true },
            { text: "Reduzir o aquecimento do cabo durante a transmissão de dados", correct: false },
            { text: "Indicar que o cabo possui uma blindagem metálica interna especial", correct: false },
            { text: "Configurar automaticamente a prioridade do tráfego (QoS) no switch VLAN", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Por que um patch cord GTS é superior a um cabo 'feito à mão' no local da obra?",
        answers: [
            { text: "Porque é pré-fabricado e testado em laboratório para garantir o desempenho da categoria", correct: true },
            { text: "Porque possui um chip interno que corrige erros de transmissão, garantindo integridade dos dados", correct: false },
            { text: "Porque não possui pares trançados, facilitando a crimpagem", correct: false },
            { text: "Porque pode ser esticado até o dobro do seu comprimento nominal", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Em qual cenário o Patch Cord Cat6 de 2,5m é mais comumente aplicado?",
        answers: [
            { text: "Na interligação de patch panels a switches ou de computadores a tomadas de parede", correct: true },
            { text: "Como cabo de backbone principal entre dois prédios diferentes, garantindo a interligação da rede", correct: false },
            { text: "Para conexões externas de longa distância em postes de energia", correct: false },
            { text: "Como substituto para cabos de alimentação elétrica de servidores", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Qual prática de instalação deve ser evitada para não danificar o patch cord?",
        answers: [
            { text: "Fazer dobras acentuadas (vincos) ou puxar o cabo com força excessiva", correct: true },
            { text: "Colocar etiquetas de identificação plásticas em volta do cabo", correct: false },
            { text: "Conectar e desconectar o cabo da porta RJ45 com o equipamento ligado", correct: false },
            { text: "Utilizar o cabo em ambientes com iluminação LED", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Cord Cat6 GTS",
        question: "Quais são as consequências típicas de utilizar um patch cord de baixa qualidade ou danificado?",
        answers: [
            { text: "Perda de pacotes, lentidão na rede e quedas intermitentes de conexão", correct: true },
            { text: "Aumento repentino da largura de banda contratada", correct: false },
            { text: "Transformação do sinal elétrico em ruído audível nos alto-falantes", correct: false },
            { text: "Queima imediata de todas as portas do switch conectado", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "O que define corretamente o produto Patch Panel 24 Portas Cat5e Fast Track Aluminium?",
        answers: [
            { text: "Painel de distribuição para terminação e organização de cabos de rede Cat5e em racks", correct: true },
            { text: "Equipamento ativo responsável por comutação de pacotes de rede", correct: false },
            { text: "Cabo de interligação direta entre computadores e switches", correct: false },
            { text: "Adaptador de mídia para conversão de cobre em fibra óptica, permitindo a integração entre redes", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual é a principal função de um patch panel em uma rede estruturada?",
        answers: [
            { text: "Centralizar, organizar e facilitar a administração e manutenções dos pontos de rede", correct: true },
            { text: "Aumentar exclusivamente a velocidade de transmissão da rede acima de 1 Gbps", correct: false },
            { text: "Substituir o uso de switches e roteadores na central de dados", correct: false },
            { text: "Atuar como um amplificador de sinal para longas distâncias principalmente em áreas rurais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "O que representa cada uma das 24 portas frontais deste equipamento?",
        answers: [
            { text: "Um ponto de rede individual correspondente a um cabo vindo da infraestrutura", correct: true },
            { text: "Um canal de comunicação virtual sem necessidade de fios", correct: false },
            { text: "Uma porta de backbone exclusiva para cabos ópticos, destinada à interligação principal da rede", correct: false },
            { text: "Uma saída de alimentação elétrica de alta tensão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual o diferencial tecnológico do sistema 'Fast Track' presente neste modelo?",
        answers: [
            { text: "Design que proporciona maior rapidez na terminação dos fios, reduzindo o tempo de instalação", correct: true },
            { text: "Sistema de software para autoidentificação de portas no switch", correct: false },
            { text: "Mecanismo de resfriamento ativo para as conexões metálicas", correct: false },
            { text: "Tecnologia de conexão sem fio para os dispositivos instalados no rack", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Quais são as vantagens de o corpo deste patch panel ser construído em alumínio?",
        answers: [
            { text: "Garante alta resistência mecânica, durabilidade e leveza, além de auxiliar na dissipação de calor", correct: true },
            { text: "Melhora a condutividade elétrica dos dados trafegados no cabo", correct: false },
            { text: "Elimina a necessidade de realizar o aterramento do rack, simplificando a instalação da infraestrutura.", correct: false },
            { text: "Permite que o painel funcione como um switch sem precisar de energia", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Como é composta a interface de conexão deste patch panel (Frente e Verso)?",
        answers: [
            { text: "Frontal com conectores RJ45 fêmea e traseira com blocos IDC para inserção dos fios", correct: true },
            { text: "Frontal com conectores RJ45 macho e traseira com bornes de parafuso", correct: false },
            { text: "Ambos os lados com conectores RJ45 fêmea para patch cords", correct: false },
            { text: "Frontal com portas USB e traseira com solda direta, garantindo conexão mais segura", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Por que a utilização de patch panels é preferível em vez de ligar os cabos da rua direto no switch?",
        answers: [
            { text: "Protege as portas do switch contra desgaste e facilita a reorganização e identificação da rede", correct: true },
            { text: "Reduz drasticamente o custo total da obra por usar menos cabos", correct: false },
            { text: "Aumenta a potência elétrica disponível para dispositivos PoE", correct: false },
            { text: "Transforma automaticamente cabos Cat5e em cabos Cat6, elevando a categoria do cabeamento utilizado", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual recurso do painel auxilia o técnico no troubleshooting (resolução de problemas)?",
        answers: [
            { text: "A numeração e áreas de identificação das portas na parte frontal", correct: true },
            { text: "Os LEDs de diagnóstico integrados em cada porta passiva", correct: false },
            { text: "O software de gerenciamento remoto via Wi-Fi", correct: false },
            { text: "As cores variadas dos conectores internos, cada cor representa um problema", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual boa prática de instalação é crucial na terminação traseira do patch panel?",
        answers: [
            { text: "Manter a torção dos pares o mais próximo possível do contato IDC para evitar interferências", correct: true },
            { text: "Destrançar os fios em pelo menos 10 cm para facilitar o manuseio", correct: false },
            { text: "Misturar cabos de categorias diferentes no mesmo bloco IDC, garantindo a padronização da conexão", correct: false },
            { text: "Utilizar fita isolante entre cada par de fios inserido", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "O que acontece se a inserção dos fios no bloco IDC for feita de forma inadequada?",
        answers: [
            { text: "Pode gerar mau contato, perda de pacotes e lentidão intermitente na rede", correct: true },
            { text: "O patch panel converte automaticamente o sinal para fibra óptica, permitindo a integração de transmissão", correct: false },
            { text: "O switch aumenta a voltagem para compensar o erro", correct: false },
            { text: "O cabo UTP passa a emitir sinal de rádio Wi-Fi", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Patch Panel 24 portas Cat5e GTS",
        question: "Qual o padrão de instalação física (tamanho) deste equipamento para racks?",
        answers: [
            { text: "Padrão 19 polegadas com altura de 1U (uma unidade de rack)", correct: true },
            { text: "Padrão doméstico para fixação direta em paredes de alvenaria", correct: false },
            { text: "Tamanho ajustável entre 10 e 15 polegadas", correct: false },
            { text: "Padrão industrial de 2 unidades de rack (2U) obrigatórias", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "O que define corretamente a Régua Vazia Patch Panel 24 Portas Cat6?",
        answers: [
            { text: "Estrutura para instalação de keystone jacks, utilizada na organização de redes Cat6 em racks", correct: true },
            { text: "Patch panel completo com conectores RJ45 já instalados de fábrica", correct: false },
            { text: "Equipamento ativo responsável pela comutação de dados, direcionando o tráfego entre dispositivos", correct: false },
            { text: "Cabo de rede pronto com 24 conectores integrados", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Por que o termo 'régua vazia' é utilizado na descrição deste produto?",
        answers: [
            { text: "Porque não possui conectores pré-instalados, permitindo total personalização com keystone jacks", correct: true },
            { text: "Porque não suporta a passagem de sinal elétrico entre os cabos, impedindo a continuidade da transmissão", correct: false },
            { text: "Porque é uma peça destinada apenas ao fechamento estético do rack", correct: false },
            { text: "Porque é um trilho de fixação que não permite a numeração de portas", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "O que cada uma das 24 aberturas (slots) da régua representa em uma instalação profissional?",
        answers: [
            { text: "Um compartimento individual para o encaixe modular de um keystone jack de dados ou voz", correct: true },
            { text: "Um canal de comunicação virtual que dispensa o uso de cabeamento, permitindo a transmissão de dados sem fios", correct: false },
            { text: "Uma porta de ventilação para o switch que será instalado abaixo", correct: false },
            { text: "Um ponto exclusivo para a conexão de cabos de energia PoE", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual é a principal vantagem estratégica de utilizar uma régua vazia em vez de um patch panel fixo?",
        answers: [
            { text: "Flexibilidade para escolher a categoria dos conectores e facilitar a substituição individual em caso de defeito", correct: true },
            { text: "Aumento direto da potência elétrica disponível para os dispositivos conectados", correct: false },
            { text: "Eliminação da necessidade de identificar os cabos com etiquetas", correct: false },
            { text: "Capacidade de converter automaticamente sinais de cobre em fibra óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual tipo de conector é compatível e indicado para preencher esta régua?",
        answers: [
            { text: "Keystone jacks RJ45 (Cat5e, Cat6 ou Cat6A) padrão de mercado", correct: true },
            { text: "Conectores RJ45 macho para crimpagem direta", correct: false },
            { text: "Apenas conectores ópticos do tipo LC duplex", correct: false },
            { text: "Terminais de parafuso para cabos elétricos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Por que a rigidez da estrutura metálica é um fator crítico para este produto?",
        answers: [
            { text: "Para suportar a força de inserção dos patch cords e o peso dos cabos traseiros sem deformar", correct: true },
            { text: "Para atuar como um dissipador de calor ativo para o servidor", correct: false },
            { text: "Para garantir que o sinal de 10 Gbps não sofra atenuação metálica", correct: false },
            { text: "Para permitir que a régua seja dobrada conforme o ângulo do rack, garantindo melhor encaixe e adaptação à estrutura", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Como a numeração das portas na régua auxilia na gestão da infraestrutura?",
        answers: [
            { text: "Facilita a identificação, o mapeamento lógico e a manutenção rápida dos pontos de rede", correct: true },
            { text: "Define automaticamente a velocidade de tráfego de cada porta no switch", correct: false },
            { text: "Indica ao sistema operacional qual tipo de dispositivo está conectado", correct: false },
            { text: "Permite que a rede funcione sem seguir as normas TIA/EIA", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Em qual cenário a régua vazia é a solução mais recomendada para um Data Center?",
        answers: [
            { text: "Quando se deseja uma instalação modular que permita expansões graduais e manutenção facilitada", correct: true },
            { text: "Quando o projeto exige uma solução sem qualquer tipo de cabeamento físico", correct: false },
            { text: "Quando se busca um equipamento ativo para gerenciar o tráfego de dados de forma eficiente", correct: false },
            { text: "Quando não há espaço para instalação de switches no rack", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "Qual boa prática de instalação deve ser seguida ao montar os keystones nesta régua?",
        answers: [
            { text: "Garantir o correto encaixe ('click') do keystone e manter a reserva técnica de cabo organizada", correct: true },
            { text: "Destrançar os pares de fios o máximo possível para aliviar a tensão na régua", correct: false },
            { text: "Colar os conectores com adesivos para evitar que saiam da régua, mantendo-os firmes e posicionados corretamente", correct: false },
            { text: "Instalar os keystones apenas após conectar os patch cords frontais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Régua Vazia para Patch Panel 24 portas Cat6 GTS",
        question: "O que caracteriza a compatibilidade 'Cat6' nesta régua metálica?",
        answers: [
            { text: "O dimensionamento e espaçamento projetados para keystones que atendem a performance Cat6", correct: true },
            { text: "A presença de uma placa de circuito impresso Cat6 interna", correct: false },
            { text: "A obrigatoriedade de usar apenas cabos blindados de alumínio, garantindo conformidade na instalação", correct: false },
            { text: "A cor da régua, que deve ser obrigatoriamente azul conforme a norma", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual é a principal finalidade do Testador de Cabo código 22.010?",
        answers: [
            { text: "Verificar continuidade, sequência e possíveis falhas em cabos de diferentes padrões", correct: true },
            { text: "Crimpar conectores RJ11 e RJ45 automaticamente, garantindo rapidez e padronização no processo", correct: false },
            { text: "Certificar enlaces de rede conforme normas ANSI/TIA", correct: false },
            { text: "Amplificar sinal de dados e vídeo em cabos longos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Por que o testador de cabos é considerado um equipamento passivo?",
        answers: [
            { text: "Porque apenas analisa conexões elétricas sem interferir no sinal do cabo", correct: true },
            { text: "Porque funciona sem qualquer fonte de energia, dispensando alimentação elétrica", correct: false },
            { text: "Porque substitui switches e roteadores", correct: false },
            { text: "Porque converte sinais analógicos em digitais", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Quais tipos de cabos podem ser testados com o equipamento 22.010?",
        answers: [
            { text: "Cabos RJ11, RJ45, BNC e USB", correct: true },
            { text: "Apenas cabos de rede Cat6A blindados", correct: false },
            { text: "Somente cabos ópticos SC e LC", correct: false },
            { text: "Cabos de energia elétrica de baixa tensão", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "A presença do conector BNC no testador indica compatibilidade com qual aplicação?",
        answers: [
            { text: "Testes de cabos coaxiais usados em CFTV e sistemas de vídeo analógico", correct: true },
            { text: "Testes de cabos de fibra óptica monomodo, verificando a integridade do sinal", correct: false },
            { text: "Testes de cabos HDMI de alta definição", correct: false },
            { text: "Testes de cabos de áudio balanceado XLR", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Ao testar um cabo RJ45, quais problemas específicos este equipamento consegue identificar?",
        answers: [
            { text: "Fio rompido (aberto), par invertido ou condutores em curto-circuito", correct: true },
            { text: "Excesso de tráfego de rede e latência de pacotes", correct: false },
            { text: "Configuração incorreta de endereçamento IP e gateway, identificando falhas ocultas", correct: false },
            { text: "Nível de alimentação PoE fornecido pelo switch", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Por que testar um cabo RJ11 é uma etapa fundamental em sistemas de telefonia?",
        answers: [
            { text: "Para evitar falhas de linha, ruídos e interrupções causadas por mau contato ou pinagem errada", correct: true },
            { text: "Para aumentar a velocidade de transmissão de dados da banda larga", correct: false },
            { text: "Para garantir que o cabo suporte sinais de fibra óptica", correct: false },
            { text: "Para reduzir o consumo de energia elétrica dos aparelhos telefônicos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "O teste de cabos USB neste equipamento possui qual limitação técnica?",
        answers: [
            { text: "Ele verifica apenas a continuidade elétrica, não medindo a taxa de transferência ou versão USB", correct: true },
            { text: "Ele não consegue identificar se há rompimento nos fios internos", correct: false },
            { text: "Ele exige que o cabo USB esteja conectado a um computador ligado para que o diagnóstico seja possível", correct: false },
            { text: "Ele converte automaticamente sinais USB em protocolos Ethernet", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "O que o instalador deve interpretar quando um dos LEDs de sequência não acende durante o teste?",
        answers: [
            { text: "Indica um rompimento ou falha de conexão no condutor correspondente àquele número", correct: true },
            { text: "Indica que a rede está operando em velocidade máxima, com desempenho otimizado", correct: false },
            { text: "Indica que o switch remoto está bloqueando o sinal de teste", correct: false },
            { text: "Indica que o cabo utilizado é de uma categoria superior à suportada", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual a principal vantagem de o testador possuir uma unidade principal e um módulo remoto destacável?",
        answers: [
            { text: "Permitir o teste de cabos cujas extremidades estão em locais ou salas diferentes", correct: true },
            { text: "Aumentar a voltagem do sinal para testar cabos de alta tensão, verificando sua resistência elétrica", correct: false },
            { text: "Permitir que dois técnicos conversem através do cabo de rede", correct: false },
            { text: "Eliminar a necessidade de baterias na unidade principal", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual funcionalidade diferencia um testador de continuidade (como o 22.010) de um certificador de rede?",
        answers: [
            { text: "O testador verifica apenas o mapa de fios e continuidade, enquanto o certificador analisa parâmetros de interferência e normas", correct: true },
            { text: "O testador é o único que consegue identificar fios rompidos", correct: false },
            { text: "O certificador não possui LEDs para indicação visual", correct: false },
            { text: "O testador é utilizado apenas para cabos de fibra óptica", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Testador de Cabo RJ11 / RJ45 / BNC / USB - GTS",
        question: "Qual é uma boa prática essencial ao utilizar este equipamento de teste?",
        answers: [
            { text: "Nunca testar cabos que estejam conectados a equipamentos energizados (switches ou PABX ativos)", correct: true },
            { text: "Utilizar o corpo do testador para pressionar conectores mal crimpados", correct: false },
            { text: "Realizar o teste apenas após o fechamento de todos os espelhos e calhas", correct: false },
            { text: "Nunca substituir a bateria, mesmo quando o aparelho parar de emitir luz, mantendo o equipamento fora de operação", correct: false }
        ]
    },
        {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "O que caracteriza corretamente o produto 73.3008K?",
        answers: [
            { text: "Switch de mesa Plug and Play com 8 portas Gigabit Ethernet", correct: true },
            { text: "Roteador wireless com antenas internas e NAT pré configurado", correct: false },
            { text: "Hub de rede 10/100 Mbps sem auto-negociação", correct: false },
            { text: "Conversor de mídia óptico para Ethernet", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Por que o equipamento é classificado como 'Plug and Play'?",
        answers: [
            { text: "Porque não requer configuração de software para funcionamento, bastando conectar os cabos", correct: true },
            { text: "Porque se auto-configura automaticamente como roteador de borda, dispensando configurações manuais iniciais", correct: false },
            { text: "Porque exige atualização de firmware obrigatória para cada nova rede", correct: false },
            { text: "Porque depende de VLANs pré-configuradas para liberar o tráfego", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Quais velocidades são suportadas pelas 8 portas deste switch?",
        answers: [
            { text: "10 Mbps, 100 Mbps e 1000 Mbps com auto-negociação em todas as portas", correct: true },
            { text: "Apenas 1000 Mbps (Gigabit) em modo fixo, sem variação automática de velocidade", correct: false },
            { text: "Somente 10 e 100 Mbps, sendo limitado a redes Fast Ethernet", correct: false },
            { text: "Velocidades definidas manualmente via interface web de gerenciamento", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "O que significa a função NWay e qual sua vantagem prática?",
        answers: [
            { text: "Auto-negociação de velocidade e duplex, garantindo conexão ideal com qualquer dispositivo sem ajustes manuais", correct: true },
            { text: "Criação automática de túneis VPN entre switches de outras marcas, permitindo a comunicação entre diferentes fabricantes", correct: false },
            { text: "Balanceamento de carga dinâmico entre dois links de internet", correct: false },
            { text: "Conversão automática de sinais elétricos em sinais de rádio Wi-Fi", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Qual a função dos indicadores visuais (LEDs) nas portas do switch?",
        answers: [
            { text: "Indicar a presença de link físico e a atividade de tráfego de dados na respectiva porta", correct: true },
            { text: "Mostrar se o endereço IP do dispositivo conectado está correto", correct: false },
            { text: "Alertar sobre colisões elétricas permanentes no segmento de rede, indicando falhas na comunicação", correct: false },
            { text: "Exibir o consumo de energia em Watts de cada computador conectado", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "O que caracteriza o modo de operação Full Duplex suportado pelo switch?",
        answers: [
            { text: "Capacidade de enviar e receber dados simultaneamente, dobrando a eficiência e eliminando colisões", correct: true },
            { text: "Transmissão de dados em apenas um sentido por vez para economizar energia", correct: false },
            { text: "Necessidade de utilizar dois cabos de rede físicos para a mesma conexão", correct: false },
            { text: "Redução da largura de banda pela metade para garantir a estabilidade do sinal", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Como funciona o método 'Store and Forward' e qual sua importância?",
        answers: [
            { text: "O switch recebe o pacote de dados inteiro, verifica se não há erros e só então o envia ao destino", correct: true },
            { text: "O switch encaminha os pacotes sem conferência, priorizando a redução máxima de latência na transmissão", correct: false },
            { text: "O switch envia todos os dados para todas as portas simultaneamente como um Hub", correct: false },
            { text: "O switch reduz o tamanho dos pacotes para facilitar o tráfego em cabos antigos", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Qual a função do buffer de memória interna de 2,048 MB no processamento de dados?",
        answers: [
            { text: "Armazenar temporariamente pacotes de dados durante picos de tráfego para evitar perdas", correct: true },
            { text: "Salvar as configurações personalizadas feitas pelo administrador da rede", correct: false },
            { text: "Aumentar o espaço de armazenamento de arquivos para os computadores da rede", correct: false },
            { text: "Armazenar o sistema operacional (firmware) para permitir a execução de funções avançadas do equipamento.", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Como funciona o sistema de alimentação elétrica deste switch?",
        answers: [
            { text: "Utiliza fonte externa bivolt automática (auto-sense), compatível com 110V e 220V", correct: true },
            { text: "Possui fonte interna fixa que exige chaveamento manual de voltagem, sendo necessário ajustar conforme a rede elétrica utilizada", correct: false },
            { text: "É alimentado exclusivamente através de cabos PoE vindos de outro switch", correct: false },
            { text: "Depende de uma bateria interna recarregável para operar sem tomada", correct: false }
        ]
    },
    {
        category: "cabling",
        product: "Switch de Mesa 8 Portas GTS",
        question: "Qual o ambiente de aplicação mais indicado para este modelo compacto?",
        answers: [
            { text: "Pequenos escritórios (SOHO), ambientes residenciais e redes de acesso", correct: true },
            { text: "Núcleos (Core) de grandes Data Centers corporativos que exigem grande tráfego de dados", correct: false },
            { text: "Backbone principal de provedores de internet (ISP)", correct: false },
            { text: "Instalações externas expostas a sol e chuva sem proteção", correct: false }
        ]
    },

    /*
    ==================================================
                    FIBRA ÓPTICA
    ==================================================
    */
    
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é o material da capa externa do cabo óptico Speed Star Mini Flat Drop Dielétrico?",
        answers: [
            { text: "Material termoplástico LSZH, retardante à chama, com baixa emissão de fumaça e resistência aos raios UV", correct: true },
            { text: "Polietileno de alta densidade com foco em resistência mecânica para ambientes enterrados", correct: false },
            { text: "PVC flexível utilizado em instalações internas sem exigência de baixa fumaça", correct: false },
            { text: "Material termofixo rígido aplicado em cabos industriais de potência", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual tipo de fibra óptica é utilizada no cabo Speed Star Mini Flat Drop?",
        answers: [
            { text: "Fibra monomodo ITU-T G.657 A2 com baixa sensibilidade à curvatura", correct: true },
            { text: "Fibra monomodo ITU-T G.652 D voltada para enlaces de backbone de longa distância", correct: false },
            { text: "Fibra multimodo OM3 utilizada em redes internas de curta distância", correct: false },
            { text: "Fibra híbrida destinada a aplicações especiais FTTA", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Para qual tipo de aplicação o cabo Speed Star Mini Flat Drop Dielétrico foi projetado?",
        answers: [
            { text: "Redes FTTH para instalações internas e externas, incluindo vias aéreas", correct: true },
            { text: "Redes de acesso óptico em ambientes controlados de data centers", correct: false },
            { text: "Backbones ópticos subterrâneos de longa distância", correct: false },
            { text: "Ambientes industriais com alto nível de interferência eletromagnética", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Quais são as opções de quantidade de fibras ópticas disponíveis neste cabo?",
        answers: [
            { text: "01 ou 02 fibras ópticas monomodo", correct: true },
            { text: "Até 04 fibras ópticas conforme configuração personalizada", correct: false },
            { text: "Apenas 01 fibra óptica para aplicações internas", correct: false },
            { text: "Configurações acima de 12 fibras para redes de distribuição", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual material é utilizado como elemento de tração no cabo óptico Speed Star Mini Flat Drop?",
        answers: [
            { text: "Filamentos dielétricos em FRP (Fiber Reinforced Plastic)", correct: true },
            { text: "Arames de aço galvanizado para aumento da resistência mecânica", correct: false },
            { text: "Cordoalhas metálicas com revestimento anticorrosivo", correct: false },
            { text: "Elementos híbridos condutores utilizados para aterramento", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é a função e característica do elemento de sustentação presente no cabo?",
        answers: [
            { text: "Elemento metálico revestido responsável pela sustentação mecânica do cabo", correct: true },
            { text: "Elemento dielétrico projetado apenas para absorção de impactos físicos", correct: false },
            { text: "Elemento óptico adicional para redundância de sinal", correct: false },
            { text: "Elemento condutor exclusivo para aterramento elétrico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é o vão máximo recomendado para instalação aérea do cabo Speed Star Mini Flat Drop?",
        answers: [
            { text: "Até 80 metros entre pontos de fixação", correct: true },
            { text: "Até 120 metros com utilização de mensageiro adicional", correct: false },
            { text: "Limitado a 40 metros devido à estrutura do cabo", correct: false },
            { text: "Sem limitação definida desde que respeitado o raio de curvatura", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Quais são as dimensões aproximadas do cabo Speed Star Mini Flat Drop?",
        answers: [
            { text: "5,0 mm x 2,0 mm", correct: true },
            { text: "6,5 mm x 3,0 mm", correct: false },
            { text: "4,0 mm x 1,6 mm", correct: false },
            { text: "8,0 mm x 4,0 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é o raio mínimo de curvatura permitido durante a instalação do cabo?",
        answers: [
            { text: "30 mm", correct: true },
            { text: "20 mm em instalações com baixa tração", correct: false },
            { text: "60 mm em ambientes externos", correct: false },
            { text: "10 vezes o diâmetro do cabo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é o raio mínimo de curvatura permitido após a instalação do cabo?",
        answers: [
            { text: "15 mm", correct: true },
            { text: "30 mm para preservar a integridade estrutural", correct: false },
            { text: "20 mm em aplicações internas", correct: false },
            { text: "6 vezes o diâmetro do cabo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é a faixa de temperatura de operação do cabo Speed Star Mini Flat Drop?",
        answers: [
            { text: "-20 °C a +65 °C", correct: true },
            { text: "0 °C a +70 °C para ambientes internos", correct: false },
            { text: "-40 °C a +85 °C para aplicações industriais", correct: false },
            { text: "-10 °C a +60 °C em instalações protegidas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual certificação regulamenta o cabo Speed Star Mini Flat Drop no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO para equipamentos ópticos ativos", correct: false },
            { text: "ISO 9001 aplicada a processos de fabricação", correct: false },
            { text: "IEC para cabos ópticos submarinos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é o código de cores padrão das fibras ópticas neste cabo?",
        answers: [
            { text: "Verde para fibra 01 e amarelo para fibra 02", correct: true },
            { text: "Azul para fibra primária e laranja para secundária", correct: false },
            { text: "Vermelho para fibra principal e branco para reserva", correct: false },
            { text: "Preto para fibra única e cinza para identificação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Como o cabo Speed Star Mini Flat Drop é fornecido logisticamente?",
        answers: [
            { text: "Bobinas de madeira com proteção ou caixas de papelão", correct: true },
            { text: "Carretéis plásticos industriais próprios para lançamento mecanizado", correct: false },
            { text: "Rolos flexíveis sem qualquer proteção estrutural", correct: false },
            { text: "Carretéis metálicos reutilizáveis para cabos de alta tração", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é o tipo de construção estrutural do cabo óptico ASU80 Advantage?",
        answers: [
            { text: "Cabo óptico aéreo dielétrico autossustentado com tubo único do tipo loose tube", correct: true },
            { text: "Cabo óptico metálico com múltiplos tubos e mensageiro externo", correct: false },
            { text: "Cabo óptico subterrâneo com núcleo compacto preenchido com gel", correct: false },
            { text: "Cabo óptico drop flat utilizado em redes FTTH internas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual material é utilizado como elemento central de sustentação no cabo ASU80 Advantage?",
        answers: [
            { text: "FRP (Fiber Reinforced Plastic), material dielétrico de alta resistência mecânica", correct: true },
            { text: "Aço galvanizado com função estrutural e aterramento", correct: false },
            { text: "Alma metálica de cobre estanhado para condução elétrica", correct: false },
            { text: "Polímero flexível sem função de sustentação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é a função do fio de rasgamento (rip cord) presente no cabo?",
        answers: [
            { text: "Facilitar a abertura controlada da capa externa durante a instalação", correct: true },
            { text: "Atuar como elemento adicional de tração longitudinal do cabo", correct: false },
            { text: "Servir como condutor para aterramento elétrico", correct: false },
            { text: "Reduzir a atenuação óptica em curvas acentuadas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "O que caracteriza o núcleo seco do cabo ASU80 Advantage?",
        answers: [
            { text: "Uso de fios bloqueadores de água que impedem a propagação de umidade", correct: true },
            { text: "Ausência de qualquer sistema de proteção contra água", correct: false },
            { text: "Preenchimento total do núcleo com gel hidrofóbico", correct: false },
            { text: "Revestimento metálico selado contra infiltração", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é a função do fio bloqueador de água (water blocking) no cabo?",
        answers: [
            { text: "Absorver água e impedir sua propagação longitudinal ao longo do cabo", correct: true },
            { text: "Aumentar a resistência elétrica do núcleo óptico", correct: false },
            { text: "Substituir a necessidade de capa externa resistente à umidade", correct: false },
            { text: "Reduzir perdas ópticas causadas por emendas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é o tipo de fibra óptica utilizada no cabo ASU80 Advantage?",
        answers: [
            { text: "Fibra monomodo ITU-T G.652 D", correct: true },
            { text: "Fibra monomodo ITU-T G.657 A2 para aplicações de alta curvatura", correct: false },
            { text: "Fibra multimodo OM4 voltada para data centers", correct: false },
            { text: "Fibra híbrida para aplicações FTTA", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é a capacidade máxima de fibras ópticas no cabo ASU80 Advantage?",
        answers: [
            { text: "Até 12 fibras ópticas organizadas em tubo único", correct: true },
            { text: "Até 24 fibras distribuídas em múltiplos tubos", correct: false },
            { text: "Limitado a 6 fibras devido ao núcleo seco", correct: false },
            { text: "Quantidade fixa de 8 fibras por projeto", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Como é feita a identificação das fibras ópticas dentro do cabo?",
        answers: [
            { text: "Por código de cores padronizado conforme norma adotada no Brasil", correct: true },
            { text: "Por numeração impressa individual em cada fibra", correct: false },
            { text: "Por anéis metálicos espaçados ao longo do tubo", correct: false },
            { text: "Por marcação química invisível ao olho humano", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é a aplicação principal do cabo ASU80 Advantage?",
        answers: [
            { text: "Instalações aéreas externas autossustentadas com vãos de até 80 metros", correct: true },
            { text: "Instalações internas em eletrocalhas prediais", correct: false },
            { text: "Instalações subterrâneas diretamente enterradas", correct: false },
            { text: "Interligação de racks em data centers", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é o diâmetro externo aproximado do cabo ASU80 Advantage?",
        answers: [
            { text: "7,0 mm ± 0,3 mm", correct: true },
            { text: "5,0 mm ± 0,2 mm", correct: false },
            { text: "8,5 mm ± 0,5 mm", correct: false },
            { text: "10,0 mm ± 1,0 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é o raio mínimo de curvatura durante a instalação do cabo?",
        answers: [
            { text: "20 vezes o diâmetro externo do cabo", correct: true },
            { text: "10 vezes o diâmetro externo do cabo", correct: false },
            { text: "15 vezes o diâmetro externo do cabo", correct: false },
            { text: "Raio fixo de 30 mm independente do diâmetro", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é o raio mínimo de curvatura após a instalação do cabo?",
        answers: [
            { text: "15 vezes o diâmetro externo do cabo", correct: true },
            { text: "20 vezes o diâmetro externo do cabo", correct: false },
            { text: "10 vezes o diâmetro externo do cabo", correct: false },
            { text: "Raio fixo de 25 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é a faixa de temperatura de operação do cabo ASU80 Advantage?",
        answers: [
            { text: "-20 °C a +65 °C", correct: true },
            { text: "0 °C a +60 °C para ambientes internos", correct: false },
            { text: "-10 °C a +70 °C para uso urbano", correct: false },
            { text: "-40 °C a +85 °C para aplicações industriais", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "O que significa a sigla ASU presente na marcação do cabo?",
        answers: [
            { text: "Autossustentado com tubo único", correct: true },
            { text: "Aplicação Subterrânea Universal", correct: false },
            { text: "Alta Sustentação Urbana", correct: false },
            { text: "Aterramento Super Ultrarresistente", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "O que indica a sigla NR na identificação do cabo?",
        answers: [
            { text: "Não retardante à chama", correct: true },
            { text: "Núcleo reforçado", correct: false },
            { text: "Norma residencial", correct: false },
            { text: "Nível reduzido de atenuação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Quais são os comprimentos padrão de fornecimento do cabo ASU80 Advantage?",
        answers: [
            { text: "Bobinas de 2 km, 3 km e 4 km", correct: true },
            { text: "Bobinas fixas de 1 km", correct: false },
            { text: "Rolos contínuos de até 500 metros", correct: false },
            { text: "Carretéis metálicos de 10 km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual órgão regulamenta e certifica o cabo ASU80 Advantage no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Cabos de telecomunicações", correct: false },
            { text: "IEC – Optical Fiber Cables", correct: false },
            { text: "ISO – Sistemas de gestão da qualidade", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é a principal finalidade do cabo óptico Speed Star AS80/AS120/AS200?",
        answers: [
            { text: "Instalações aéreas externas auto-sustentadas em vãos de até 80 m, 120 m e 200 m", correct: true },
            { text: "Instalações aéreas externas com necessidade de mensageiro metálico adicional", correct: false },
            { text: "Instalações subterrâneas diretamente enterradas sem dutos", correct: false },
            { text: "Interligação óptica submarina de curta distância", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "O que diferencia os modelos AS80, AS120 e AS200 dentro da linha Speed Star?",
        answers: [
            { text: "O comprimento máximo do vão aéreo suportado pelo cabo", correct: true },
            { text: "A capacidade mecânica de sustentação conforme o tipo de instalação aérea", correct: false },
            { text: "O tipo de fibra óptica utilizado em cada modelo", correct: false },
            { text: "A aplicação exclusiva para redes internas ou prediais", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é o tipo de construção estrutural do cabo Speed Star AS80/AS120/AS200?",
        answers: [
            { text: "Cabo óptico aéreo auto-sustentável com loose tubes", correct: true },
            { text: "Cabo óptico aéreo com tubos soltos e estrutura não metálica", correct: false },
            { text: "Cabo drop flat com elemento de tração lateral", correct: false },
            { text: "Cabo subterrâneo com múltiplos tubos encordoados", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual tecnologia estrutural é utilizada para proteger as fibras ópticas contra flexões e esmagamento?",
        answers: [
            { text: "Loose tubes que funcionam como elementos de proteção mecânica das fibras", correct: true },
            { text: "Tubo solto que permite acomodação das fibras sob esforços mecânicos", correct: false },
            { text: "Blindagem metálica contínua aplicada ao redor do núcleo", correct: false },
            { text: "Camada interna rígida de PVC estrutural", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é o material da capa externa do cabo Speed Star AS80/AS120/AS200?",
        answers: [
            { text: "Polietileno de alta resistência com proteção contra raios UV", correct: true },
            { text: "Polietileno formulado para suportar intempéries e exposição solar", correct: false },
            { text: "PVC flexível retardante à chama para uso interno", correct: false },
            { text: "Polímero LSZH de baixa emissão de fumaça", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Por que o polietileno com proteção UV é utilizado na capa externa desse cabo?",
        answers: [
            { text: "Para resistir à exposição prolongada ao sol e às condições climáticas externas", correct: true },
            { text: "Para garantir maior durabilidade em ambientes externos a céu aberto", correct: false },
            { text: "Para permitir instalação exclusiva em ambientes internos", correct: false },
            { text: "Para aumentar a condutividade elétrica do cabo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual tipo de fibra óptica é utilizado no cabo Speed Star AS80/AS120/AS200?",
        answers: [
            { text: "Fibra monomodo ITU-T G.652 D (Single Mode)", correct: true },
            { text: "Fibra monomodo padrão para enlaces ópticos de longa distância", correct: false },
            { text: "Fibra multimodo OM3 para redes corporativas", correct: false },
            { text: "Fibra híbrida para aplicações FTTA", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é o revestimento aplicado às fibras ópticas utilizadas neste cabo?",
        answers: [
            { text: "Acrilato curado por radiação UV", correct: true },
            { text: "Revestimento acrílico aplicado para proteção mecânica das fibras", correct: false },
            { text: "Polietileno de alta densidade", correct: false },
            { text: "Camada metálica anticorrosiva", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é a função da geléia presente dentro das loose tubes?",
        answers: [
            { text: "Permitir o livre movimento das fibras e reduzir esforços mecânicos", correct: true },
            { text: "Proteger as fibras contra microcurvaturas durante a instalação", correct: false },
            { text: "Atuar como isolante elétrico do núcleo óptico", correct: false },
            { text: "Aumentar a rigidez estrutural do cabo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Quais faixas de quantidade de fibras ópticas são suportadas pelo cabo Speed Star AS80/AS120/AS200?",
        answers: [
            { text: "De 2 até 144 fibras ópticas, conforme a configuração do cabo", correct: true },
            { text: "Quantidade variável de fibras de acordo com o projeto óptico", correct: false },
            { text: "Limitado a no máximo 12 fibras por cabo", correct: false },
            { text: "Quantidade fixa definida em fábrica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Como o diâmetro externo do cabo varia em relação à quantidade de fibras?",
        answers: [
            { text: "Aumenta progressivamente conforme cresce o número de fibras ópticas", correct: true },
            { text: "Varia de acordo com a quantidade de tubos e fibras internas", correct: false },
            { text: "Permanece fixo independentemente da quantidade de fibras", correct: false },
            { text: "Depende apenas do tipo de vão e não das fibras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é o raio mínimo de curvatura permitido durante a instalação?",
        answers: [
            { text: "20 vezes o diâmetro externo do cabo", correct: true },
            { text: "Valor proporcional ao diâmetro do cabo conforme norma técnica", correct: false },
            { text: "10 vezes o diâmetro externo do cabo", correct: false },
            { text: "Raio fixo de 30 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é o raio mínimo de curvatura permitido após a instalação?",
        answers: [
            { text: "10 vezes o diâmetro externo do cabo", correct: true },
            { text: "Raio reduzido após estabilização mecânica do cabo", correct: false },
            { text: "20 vezes o diâmetro externo do cabo", correct: false },
            { text: "Raio fixo de 25 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é a faixa de temperatura de operação do cabo Speed Star AS80/AS120/AS200?",
        answers: [
            { text: "-20 °C a +65 °C", correct: true },
            { text: "Faixa típica para cabos ópticos de uso externo", correct: false },
            { text: "0 °C a +50 °C", correct: false },
            { text: "-40 °C a +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "O que significa a sigla AS presente na identificação do cabo Speed Star?",
        answers: [
            { text: "Auto-Sustentável", correct: true },
            { text: "Aplicação Subterrânea", correct: false },
            { text: "Alta Sensibilidade óptica", correct: false },
            { text: "Aterramento Superficial", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual norma regulamenta este cabo no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "Norma brasileira para cabos elétricos de potência", correct: false },
            { text: "IEC para cabos ópticos submarinos", correct: false },
            { text: "ISO 11801 para cabeamento estruturado interno", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a aplicação principal do cabo óptico Speed Star ASU80 / ASU120?",
        answers: [
            { text: "Instalações aéreas externas auto-sustentadas em vãos de até 80 m e 120 m", correct: true },
            { text: "Instalações aéreas externas com necessidade de mensageiro metálico", correct: false },
            { text: "Distribuição interna em edifícios e data centers", correct: false },
            { text: "Interligação submarina de curta distância", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "O que diferencia o modelo ASU80 do ASU120 na linha Speed Star?",
        answers: [
            { text: "O comprimento máximo do vão aéreo suportado pelo cabo", correct: true },
            { text: "A capacidade de sustentação mecânica conforme o vão de instalação", correct: false },
            { text: "O tipo de fibra óptica utilizada em cada modelo", correct: false },
            { text: "A composição do revestimento acrilato das fibras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a configuração estrutural do cabo Speed Star ASU?",
        answers: [
            { text: "Cabo óptico aéreo dielétrico auto-sustentado com tubo único (loose tube)", correct: true },
            { text: "Cabo óptico aéreo com tubo único e estrutura totalmente não metálica", correct: false },
            { text: "Cabo drop flat com dois elementos de tração laterais", correct: false },
            { text: "Cabo óptico subterrâneo com múltiplos tubos encordoados", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a função estrutural das loose tubes no cabo ASU?",
        answers: [
            { text: "Proteger as fibras contra flexões e atuar como elemento antiesmagamento", correct: true },
            { text: "Permitir acomodação das fibras sem transferência direta de esforço mecânico", correct: false },
            { text: "Servir como elemento principal de tração do cabo", correct: false },
            { text: "Realizar o aterramento elétrico da estrutura", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é o material da capa externa do cabo Speed Star ASU?",
        answers: [
            { text: "Polietileno de alto desempenho com proteção contra raios UV", correct: true },
            { text: "Polietileno formulado para resistência climática em uso externo", correct: false },
            { text: "PVC flexível retardante à chama para ambientes internos", correct: false },
            { text: "LSZH com baixa emissão de fumaça", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Por que a proteção contra raios UV é essencial neste cabo?",
        answers: [
            { text: "Para garantir resistência à exposição solar contínua em ambientes externos", correct: true },
            { text: "Para aumentar a durabilidade do revestimento em instalações aéreas", correct: false },
            { text: "Para reduzir a atenuação óptica da fibra", correct: false },
            { text: "Para eliminar a necessidade de geléia interna", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual material é utilizado como elemento central de força no cabo Speed Star ASU?",
        answers: [
            { text: "FRP (Fiber Reinforced Plastic), material dielétrico de alta resistência mecânica", correct: true },
            { text: "Elemento dielétrico rígido projetado para absorver esforços de tração", correct: false },
            { text: "Aço galvanizado com tratamento anticorrosivo", correct: false },
            { text: "Cobre eletrolítico recozido", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a principal função do elemento central de força em FRP?",
        answers: [
            { text: "Absorver esforços mecânicos e prevenir alongamento longitudinal do cabo", correct: true },
            { text: "Manter a estabilidade estrutural do cabo durante o vão aéreo", correct: false },
            { text: "Atuar como caminho de aterramento elétrico", correct: false },
            { text: "Reduzir a atenuação óptica em enlaces longos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a função da geléia presente dentro do tubo único?",
        answers: [
            { text: "Proteger as fibras contra umidade, impactos mecânicos e microcurvaturas", correct: true },
            { text: "Permitir movimentação controlada das fibras dentro do tubo", correct: false },
            { text: "Atuar como isolante elétrico do núcleo", correct: false },
            { text: "Aumentar a rigidez estrutural do cabo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a função do fio de rasgamento (rip cord) no cabo?",
        answers: [
            { text: "Facilitar a abertura controlada da capa externa durante a instalação", correct: true },
            { text: "Permitir remoção rápida do revestimento sem danificar o núcleo", correct: false },
            { text: "Atuar como elemento de tração adicional", correct: false },
            { text: "Servir como referência de identificação das fibras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual tipo de fibra óptica é utilizado no cabo Speed Star ASU?",
        answers: [
            { text: "Fibra monomodo ITU-T G.652 D", correct: true },
            { text: "Fibra monomodo padrão para enlaces ópticos de acesso e distribuição", correct: false },
            { text: "Fibra multimodo OM3 para redes corporativas", correct: false },
            { text: "Fibra multimodo OM4 para data centers", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a faixa de quantidade de fibras ópticas suportada pelo cabo Speed Star ASU?",
        answers: [
            { text: "De 1 até 144 fibras ópticas, conforme a configuração do cabo", correct: true },
            { text: "Quantidade variável definida conforme projeto óptico", correct: false },
            { text: "Limitado a no máximo 12 fibras ópticas", correct: false },
            { text: "Quantidade fixa definida em fábrica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual norma brasileira regulamenta este cabo?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "Norma brasileira para cabos elétricos de potência", correct: false },
            { text: "ISO 11801 para cabeamento estruturado interno", correct: false },
            { text: "IEC para cabos ópticos submarinos", correct: false }
        ]
    },


    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a principal aplicação do cabo óptico Speed Star Drop Figura 8?",
        answers: [
            { text: "Atendimento FTTH, interligando a última caixa de emenda aérea até o assinante", correct: true },
            { text: "Conexão de acesso FTTH em trechos finais da rede de distribuição", correct: false },
            { text: "Backbone óptico de longa distância entre centrais", correct: false },
            { text: "Interligação interna de racks em data centers", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Por que o cabo Speed Star Drop Figura 8 é indicado para redes FTTH?",
        answers: [
            { text: "Porque possui dimensões compactas, resistência mecânica adequada e suporta instalação aérea até 80 m", correct: true },
            { text: "Porque combina leveza estrutural com capacidade de instalação aérea de curto vão", correct: false },
            { text: "Porque utiliza exclusivamente fibras multimodo para curta distância", correct: false },
            { text: "Porque é projetado apenas para instalações internas prediais", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "O que caracteriza o formato Figura 8 neste cabo óptico?",
        answers: [
            { text: "A presença de um elemento de sustentação integrado ao corpo do cabo óptico", correct: true },
            { text: "A integração física entre o cabo óptico e o mensageiro de sustentação", correct: false },
            { text: "A utilização de dois tubos ópticos paralelos independentes", correct: false },
            { text: "A aplicação de blindagem metálica dupla", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é o material do elemento de sustentação do cabo Figura 8?",
        answers: [
            { text: "Fio de aço galvanizado com diâmetro nominal de 1,3 mm", correct: true },
            { text: "Mensageiro metálico em aço tratado para uso aéreo", correct: false },
            { text: "Elemento dielétrico em FRP", correct: false },
            { text: "Cabo de aramida com revestimento polimérico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é o material da capa externa do cabo Speed Star Drop Figura 8?",
        answers: [
            { text: "Material termoplástico resistente aos raios UV, produtos químicos e umidade", correct: true },
            { text: "Polímero externo formulado para resistir a intempéries em uso externo", correct: false },
            { text: "PVC flexível retardante à chama para uso interno exclusivo", correct: false },
            { text: "LSZH para ambientes confinados", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual característica da capa externa facilita a instalação do cabo?",
        answers: [
            { text: "Baixo atrito superficial, facilitando o manuseio e lançamento", correct: true },
            { text: "Superfície lisa que reduz esforço durante o lançamento aéreo", correct: false },
            { text: "Alta rugosidade para maior aderência manual", correct: false },
            { text: "Revestimento metálico antiderrapante", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "O que significa a classificação COG do revestimento externo?",
        answers: [
            { text: "Revestimento não propagante à chama", correct: true },
            { text: "Classificação de comportamento ao fogo do material externo", correct: false },
            { text: "Capa óptica galvanizada", correct: false },
            { text: "Classe de blindagem metálica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual material é utilizado como elemento de tração do cabo?",
        answers: [
            { text: "Filamentos de fibras dielétricas de aramida", correct: true },
            { text: "Fibras sintéticas de alta resistência mecânica", correct: false },
            { text: "Fios de aço galvanizado trançados", correct: false },
            { text: "Cabo de cobre eletrolítico recozido", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a função do elemento de tração em aramida neste cabo?",
        answers: [
            { text: "Absorver esforços mecânicos em instalações internas em dutos e canaletas", correct: true },
            { text: "Proteger o cabo contra tração excessiva em lançamentos internos", correct: false },
            { text: "Substituir o elemento de sustentação em aço", correct: false },
            { text: "Reduzir a atenuação óptica em longas distâncias", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a função do loose tube no cabo Speed Star Drop Figura 8?",
        answers: [
            { text: "Proteger as fibras contra esmagamento, flexões e variações térmicas", correct: true },
            { text: "Permitir acomodação das fibras sem transferência direta de esforços", correct: false },
            { text: "Servir como elemento principal de sustentação mecânica", correct: false },
            { text: "Eliminar a necessidade de geléia interna", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Quais tipos de fibra óptica podem ser utilizados neste cabo?",
        answers: [
            { text: "Monomodo ITU-T G.657 A1 e ITU-T G.652 D", correct: true },
            { text: "Fibras monomodo padrão para redes de acesso FTTH", correct: false },
            { text: "Somente fibra multimodo OM3", correct: false },
            { text: "Fibra híbrida monomodo e multimodo no mesmo tubo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a quantidade de fibras ópticas suportada pelo cabo Speed Star Drop Figura 8?",
        answers: [
            { text: "De 1 até 12 fibras ópticas", correct: true },
            { text: "Quantidade variável conforme aplicação FTTH", correct: false },
            { text: "Quantidade fixa de 24 fibras", correct: false },
            { text: "Somente 1 fibra óptica por cabo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é o vão máximo recomendado para instalação aérea do cabo Figura 8?",
        answers: [
            { text: "80 metros", correct: true },
            { text: "Vãos curtos compatíveis com redes de acesso FTTH", correct: false },
            { text: "120 metros", correct: false },
            { text: "200 metros", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual norma brasileira está associada ao cabo óptico de acesso ao assinante?",
        answers: [
            { text: "NBR 15596", correct: true },
            { text: "Norma brasileira específica para cabos ópticos de acesso FTTH", correct: false },
            { text: "NBR 5410 para instalações elétricas", correct: false },
            { text: "NBR 5419 para sistemas de aterramento", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual órgão certifica este cabo para uso no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "Órgão regulador de telecomunicações para cabos ópticos", correct: false },
            { text: "INMETRO – Cabos elétricos de potência", correct: false },
            { text: "IEC – Cabos submarinos ópticos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é a principal aplicação do cabo óptico Speed Star Mini Flat Drop Opti Ray?",
        answers: [
            { text: "Redes FTTH para atendimento final ao assinante em instalações internas e externas", correct: true },
            { text: "Distribuição óptica de acesso em redes de última milha", correct: false },
            { text: "Interligação de racks em data centers", correct: false },
            { text: "Backbones ópticos metropolitanos de longa distância", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Por que o cabo Opti Ray é indicado para ambientes com espaço físico limitado?",
        answers: [
            { text: "Porque possui dimensões compactas e utiliza fibra de baixa sensibilidade à curvatura", correct: true },
            { text: "Porque combina perfil reduzido com flexibilidade adequada para passagens estreitas", correct: false },
            { text: "Porque elimina a necessidade de elementos de tração", correct: false },
            { text: "Porque dispensa qualquer raio mínimo de curvatura", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual característica define o formato Mini Flat Drop do cabo Opti Ray?",
        answers: [
            { text: "Seção transversal plana e compacta, adequada para passagens discretas", correct: true },
            { text: "Perfil físico otimizado para instalação embutida e aparente", correct: false },
            { text: "Estrutura circular com blindagem metálica contínua", correct: false },
            { text: "Dois tubos ópticos independentes paralelos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "O que diferencia o cabo Opti Ray de um Mini Flat Drop convencional?",
        answers: [
            { text: "A presença de elementos metálicos de tração e sustentação colados ao cabo", correct: true },
            { text: "A integração de arames metálicos externos fixados ao corpo do cabo", correct: false },
            { text: "A utilização exclusiva de elementos dielétricos", correct: false },
            { text: "A ausência total de elementos de sustentação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é o material da capa externa do cabo Speed Star Mini Flat Drop Opti Ray?",
        answers: [
            { text: "Termoplástico LSZH retardante à chama, livre de halogênios e com baixo atrito", correct: true },
            { text: "Material polimérico de baixa emissão de fumaça indicado para ambientes internos", correct: false },
            { text: "PVC flexível com alta emissão de fumaça", correct: false },
            { text: "Polietileno corrugado para uso subterrâneo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é a principal vantagem do uso de capa LSZH neste cabo?",
        answers: [
            { text: "Baixa emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "Maior segurança em ambientes internos e áreas com circulação de pessoas", correct: false },
            { text: "Redução da atenuação óptica da fibra", correct: false },
            { text: "Eliminação da necessidade de aterramento", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "O que significa a denominação \"Opti Ray – Arame Colado\"?",
        answers: [
            { text: "Elementos metálicos de tração e sustentação revestidos e colados ao cabo", correct: true },
            { text: "Arames de aço incorporados externamente ao corpo do cabo óptico", correct: false },
            { text: "Blindagem metálica contínua ao redor da fibra", correct: false },
            { text: "Camada metálica aplicada apenas para aterramento", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual benefício os elementos metálicos colados proporcionam ao cabo Opti Ray?",
        answers: [
            { text: "Maior rigidez estrutural e resistência mecânica em instalações aéreas", correct: true },
            { text: "Aumento da estabilidade do cabo em vãos curtos", correct: false },
            { text: "Redução do coeficiente de atenuação da fibra", correct: false },
            { text: "Eliminação da necessidade de raio mínimo de curvatura", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual tipo de fibra óptica é utilizado no cabo Speed Star Mini Flat Drop Opti Ray?",
        answers: [
            { text: "Fibra monomodo ITU-T G.657 A2 com baixa sensibilidade à curvatura", correct: true },
            { text: "Fibra monomodo otimizada para aplicações FTTH", correct: false },
            { text: "Fibra multimodo OM3 para redes corporativas", correct: false },
            { text: "Fibra híbrida monomodo/multimodo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Quais são as configurações de fibras disponíveis no cabo Opti Ray?",
        answers: [
            { text: "01 ou 02 fibras ópticas monomodo", correct: true },
            { text: "Configurações simples voltadas para redes de acesso FTTH", correct: false },
            { text: "Quantidade fixa de 4 fibras", correct: false },
            { text: "Configurações acima de 24 fibras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é o peso nominal aproximado do cabo Opti Ray por quilômetro?",
        answers: [
            { text: "Cerca de 20 kg/km", correct: true },
            { text: "Peso reduzido compatível com instalações aéreas de curto vão", correct: false },
            { text: "Cerca de 80 kg/km", correct: false },
            { text: "Cerca de 120 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é o vão máximo recomendado para instalação aérea do cabo Opti Ray?",
        answers: [
            { text: "Até 80 metros", correct: true },
            { text: "Vãos curtos compatíveis com redes FTTH aéreas", correct: false },
            { text: "Até 120 metros", correct: false },
            { text: "Sem limitação de vão", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Como é realizada a marcação da capa externa do cabo Opti Ray?",
        answers: [
            { text: "Gravações a cada 1 metro com identificação do produto, norma e lote", correct: true },
            { text: "Marcação sequencial contínua para controle de metragem", correct: false },
            { text: "Etiqueta adesiva aplicada a cada 10 metros", correct: false },
            { text: "Identificação eletrônica por RFID", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual órgão certifica o cabo Speed Star Mini Flat Drop Opti Ray no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "Órgão regulador brasileiro de telecomunicações", correct: false },
            { text: "INMETRO – Cabos elétricos de potência", correct: false },
            { text: "IEC – Cabos submarinos ópticos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é a principal aplicação do cabo óptico Speed Star Mini Flat Drop Compacto?",
        answers: [
            { text: "Atendimento FTTH em instalações internas, conectando a caixa óptica ao assinante", correct: true },
            { text: "Backbone óptico externo para longas distâncias metropolitanas e interligação de redes públicas", correct: false },
            { text: "Interligação de racks em data centers", correct: false },
            { text: "Instalações subterrâneas diretamente enterradas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Por que o cabo Mini Flat Drop Compacto é indicado para ambientes com espaço limitado?",
        answers: [
            { text: "Devido às suas dimensões reduzidas, maior flexibilidade e uso de fibra com baixa sensibilidade à curvatura", correct: true },
            { text: "Porque elimina totalmente restrições físicas e mecânicas relacionadas ao raio de curvatura", correct: false },
            { text: "Porque possui blindagem metálica espessa", correct: false },
            { text: "Porque utiliza fibras multimodo maiores", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "O que caracteriza o formato Mini Flat Drop Compacto deste cabo óptico?",
        answers: [
            { text: "Perfil plano e compacto que facilita passagens em canaletas, rodapés e dutos internos", correct: true },
            { text: "Formato circular com múltiplos tubos ópticos e camadas adicionais de proteção", correct: false },
            { text: "Perfil oval com mensageiro metálico", correct: false },
            { text: "Estrutura híbrida com dois cabos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual vantagem prática o formato compacto oferece ao instalador?",
        answers: [
            { text: "Facilidade de manuseio, melhor acabamento estético e menor impacto visual", correct: true },
            { text: "Maior resistência mecânica para aplicações aéreas com grandes vãos de sustentação", correct: false },
            { text: "Capacidade de enterramento direto", correct: false },
            { text: "Eliminação total de emendas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é o material da capa externa do cabo Speed Star Mini Flat Drop Compacto?",
        answers: [
            { text: "Material termoplástico LSZH retardante à chama e de baixa emissão de fumaça", correct: true },
            { text: "PVC flexível convencional com elevada emissão de fumaça e gases tóxicos", correct: false },
            { text: "Polietileno de alta densidade", correct: false },
            { text: "Elastômero termoplástico blindado", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é a principal função da tecnologia LSZH neste cabo?",
        answers: [
            { text: "Reduzir a emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "Atender requisitos de segurança em ambientes fechados com circulação de pessoas", correct: false },
            { text: "Aumentar a resistência elétrica", correct: false },
            { text: "Permitir enterramento direto", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Quais materiais são utilizados como elementos de tração no cabo Mini Flat Drop Compacto?",
        answers: [
            { text: "Filamentos metálicos incorporados à estrutura do cabo", correct: true },
            { text: "Fibras de aramida com função exclusiva de tração mecânica dielétrica", correct: false },
            { text: "Aço galvanizado estrutural", correct: false },
            { text: "Condutor de cobre estanhado", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é a função principal dos elementos metálicos de tração neste cabo?",
        answers: [
            { text: "Absorver esforços mecânicos durante o lançamento e manuseio", correct: true },
            { text: "Garantir sustentação aérea contínua em vãos extensos de rede externa", correct: false },
            { text: "Atuar como blindagem eletromagnética", correct: false },
            { text: "Substituir o cordão de ripagem", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual tipo de fibra óptica é utilizado no cabo Speed Star Mini Flat Drop Compacto?",
        answers: [
            { text: "Fibra monomodo BLI A/B conforme ITU-T G.657 A2", correct: true },
            { text: "Fibra monomodo ITU-T G.652 D utilizada em enlaces ópticos de backbone", correct: false },
            { text: "Fibra multimodo OM3", correct: false },
            { text: "Fibra híbrida combinada", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual característica da fibra ITU-T G.657 A2 é essencial para este tipo de cabo?",
        answers: [
            { text: "Baixa sensibilidade à curvatura, permitindo instalações com curvas mais fechadas", correct: true },
            { text: "Maior resistência mecânica para aplicações industriais severas", correct: false },
            { text: "Maior diâmetro de núcleo", correct: false },
            { text: "Uso exclusivo externo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Quais são as configurações de fibras disponíveis para o cabo Mini Flat Drop Compacto?",
        answers: [
            { text: "01 ou 02 fibras ópticas monomodo", correct: true },
            { text: "Configurações variáveis que podem chegar até doze fibras ópticas", correct: false },
            { text: "Quantidade fixa de quatro fibras", correct: false },
            { text: "Configurações acima de vinte fibras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Quais são as dimensões externas aproximadas do cabo Mini Flat Drop Compacto?",
        answers: [
            { text: "3,0 mm x 2,0 mm", correct: true },
            { text: "Dimensões maiores para reforço estrutural em ambientes externos agressivos", correct: false },
            { text: "5,2 mm x 2,0 mm", correct: false },
            { text: "4,0 mm x 4,0 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é o peso líquido aproximado do cabo por quilômetro?",
        answers: [
            { text: "7,8 kg/km", correct: true },
            { text: "Peso elevado para aplicações externas com reforço metálico estrutural", correct: false },
            { text: "15 kg/km", correct: false },
            { text: "22 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é o raio mínimo de curvatura permitido durante a instalação do cabo?",
        answers: [
            { text: "30 mm", correct: true },
            { text: "Raio variável conforme tipo de instalação e esforço mecânico aplicado", correct: false },
            { text: "15 mm", correct: false },
            { text: "60 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é o raio mínimo de curvatura permitido após a instalação?",
        answers: [
            { text: "15 mm", correct: true },
            { text: "Raio dependente das condições ambientais e do método de fixação", correct: false },
            { text: "30 mm", correct: false },
            { text: "20 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual norma técnica rege o ensaio de compressão deste cabo?",
        answers: [
            { text: "NBR 13507", correct: true },
            { text: "Norma elétrica voltada para instalações prediais de baixa tensão", correct: false },
            { text: "NBR 5410", correct: false },
            { text: "IEC 60794-1", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é a faixa de temperatura de operação do cabo Mini Flat Drop Compacto?",
        answers: [
            { text: "-20 °C até +65 °C", correct: true },
            { text: "Faixa ampliada para ambientes industriais com variações térmicas extremas", correct: false },
            { text: "0 °C até +50 °C", correct: false },
            { text: "-40 °C até +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Como é realizada a marcação da capa externa do cabo?",
        answers: [
            { text: "Gravação a cada 1 metro com identificação do produto, norma, lote e ano", correct: true },
            { text: "Sistema de identificação contínua para rastreabilidade e controle de produção", correct: false },
            { text: "Etiqueta adesiva periódica", correct: false },
            { text: "Marcação apenas nas pontas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual órgão certifica o cabo Speed Star Mini Flat Drop Compacto para uso no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "Órgão regulador voltado à certificação de equipamentos e produtos de telecomunicações", correct: false },
            { text: "INMETRO – Cabos elétricos", correct: false },
            { text: "IEC – Cabos submarinos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o principal diferencial do Cabo Óptico Speed Star Mini Flat Drop – versão Inovação?",
        answers: [
            { text: "Integração do carretel com o desbobinador, facilitando transporte, manuseio e lançamento do cabo", correct: true },
            { text: "Solução logística integrada que otimiza o transporte, o armazenamento e o lançamento em campo", correct: false },
            { text: "Uso exclusivo em instalações subterrâneas", correct: false },
            { text: "Blindagem metálica contínua industrial", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Para quais cenários o Mini Flat Drop Inovação é indicado?",
        answers: [
            { text: "Redes FTTH internas e externas, inclusive vias aéreas com vãos de até 80 m", correct: true },
            { text: "Aplicações de acesso óptico em ambientes internos, externos e instalações aéreas auto-sustentadas", correct: false },
            { text: "Backbones ópticos de longa distância", correct: false },
            { text: "Interligação de racks internos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "O que caracteriza o formato Mini Flat Drop deste cabo?",
        answers: [
            { text: "Perfil plano e compacto que facilita instalação em espaços limitados", correct: true },
            { text: "Estrutura otimizada para passagens discretas em ambientes internos e externos", correct: false },
            { text: "Estrutura circular com tubos ópticos", correct: false },
            { text: "Perfil oval com mensageiro externo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual vantagem prática o formato Mini Flat oferece ao instalador?",
        answers: [
            { text: "Melhor acabamento estético, menor impacto visual e facilidade de passagem", correct: true },
            { text: "Facilidade de instalação aliada a um visual mais discreto em ambientes residenciais", correct: false },
            { text: "Maior capacidade de fibras", correct: false },
            { text: "Dispensa caixas ópticas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o material da capa externa do Mini Flat Drop Inovação?",
        answers: [
            { text: "Material termoplástico LSZH, retardante à chama, com baixa emissão de fumaça e resistência UV", correct: true },
            { text: "Composição termoplástica desenvolvida para segurança, durabilidade e uso interno e externo", correct: false },
            { text: "PVC flexível para uso interno", correct: false },
            { text: "Polietileno corrugado subterrâneo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é a principal vantagem da tecnologia LSZH aplicada a este cabo?",
        answers: [
            { text: "Menor emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "Aumento da segurança em ambientes fechados com circulação de pessoas", correct: false },
            { text: "Maior condutividade elétrica", correct: false },
            { text: "Redução direta da atenuação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Quais elementos estruturais garantem a resistência mecânica do cabo Mini Flat Drop Inovação?",
        answers: [
            { text: "Filamentos metálicos para tração e elemento metálico dedicado à sustentação", correct: true },
            { text: "Estrutura mecânica projetada para suportar esforços de tração e instalação aérea", correct: false },
            { text: "Somente fibras de aramida", correct: false },
            { text: "Blindagem metálica corrugada", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é a função do elemento metálico de sustentação neste cabo?",
        answers: [
            { text: "Permitir instalação aérea auto-sustentada em vãos de até 80 m", correct: true },
            { text: "Garantir sustentação mecânica adequada em instalações aéreas de acesso óptico", correct: false },
            { text: "Atuar como aterramento elétrico", correct: false },
            { text: "Reduzir a atenuação óptica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual tipo de fibra óptica é utilizada no Mini Flat Drop Inovação?",
        answers: [
            { text: "Fibra monomodo ITU-T G.657 A1 com baixa sensibilidade à curvatura", correct: true },
            { text: "Fibra desenvolvida para suportar curvas reduzidas sem perdas significativas de desempenho", correct: false },
            { text: "Fibra monomodo G.652 D", correct: false },
            { text: "Fibra multimodo OM3", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Por que a fibra ITU-T G.657 A1 é adequada para este tipo de cabo?",
        answers: [
            { text: "Permite raios de curvatura menores sem aumento significativo de atenuação", correct: true },
            { text: "Garante maior flexibilidade para instalações com curvas acentuadas em campo", correct: false },
            { text: "Possui núcleo maior", correct: false },
            { text: "Uso exclusivo externo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é a configuração de fibras do Mini Flat Drop Inovação?",
        answers: [
            { text: "02 fibras ópticas monomodo", correct: true },
            { text: "Configuração otimizada para aplicações FTTH com duas fibras monomodo", correct: false },
            { text: "01 fibra óptica exclusiva", correct: false },
            { text: "Até 12 fibras ópticas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Quais são as dimensões externas aproximadas do cabo?",
        answers: [
            { text: "5,0 mm x 2,0 mm (± 0,2 mm)", correct: true },
            { text: "Dimensões projetadas para equilíbrio entre robustez mecânica e flexibilidade", correct: false },
            { text: "3,0 mm x 2,0 mm", correct: false },
            { text: "6,5 mm x 3,0 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o peso nominal aproximado do cabo por quilômetro?",
        answers: [
            { text: "Cerca de 20 kg/km", correct: true },
            { text: "Peso compatível com aplicações aéreas e instalações FTTH de acesso", correct: false },
            { text: "Cerca de 7,8 kg/km", correct: false },
            { text: "Cerca de 45 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o raio mínimo de curvatura permitido durante a instalação?",
        answers: [
            { text: "30 mm", correct: true },
            { text: "Raio definido para garantir integridade mecânica e desempenho óptico durante o lançamento", correct: false },
            { text: "15 mm", correct: false },
            { text: "60 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o raio mínimo de curvatura permitido após a instalação?",
        answers: [
            { text: "15 mm", correct: true },
            { text: "Raio reduzido compatível com instalações definitivas em ambientes residenciais", correct: false },
            { text: "30 mm", correct: false },
            { text: "20 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual norma técnica rege o ensaio de compressão do Mini Flat Drop Inovação?",
        answers: [
            { text: "NBR 13507", correct: true },
            { text: "Norma aplicada a ensaios mecânicos de cabos ópticos para telecomunicações", correct: false },
            { text: "NBR 5410", correct: false },
            { text: "IEC 60794-1", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é a faixa de temperatura de operação do cabo?",
        answers: [
            { text: "-20 °C a +65 °C", correct: true },
            { text: "Faixa adequada para operação em ambientes internos e externos convencionais", correct: false },
            { text: "0 °C a +50 °C", correct: false },
            { text: "-40 °C a +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Como é realizada a marcação da capa externa do cabo?",
        answers: [
            { text: "Gravação a cada 1 metro com identificação do produto, norma e lote", correct: true },
            { text: "Sistema de marcação contínua para rastreabilidade e identificação em campo", correct: false },
            { text: "Etiqueta adesiva periódica", correct: false },
            { text: "Marcação apenas nas pontas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Como o Mini Flat Drop Inovação é fornecido logisticamente?",
        answers: [
            { text: "Carretel integrado ao desbobinador, em comprimentos padrão de 1000 m", correct: true },
            { text: "Solução logística integrada que facilita transporte, armazenamento e lançamento em campo", correct: false },
            { text: "Bobinas de madeira de 3000 m", correct: false },
            { text: "Rolos flexíveis de 100 m", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual órgão certifica o cabo Speed Star Mini Flat Drop Inovação no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "FECAP - Federação de Cabos", correct: false },
            { text: "INMETRO – Cabos elétricos", correct: false },
            { text: "IEC – Cabos submarinos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é a principal aplicação do cabo Speed Star Mini Flat Drop com reforço metálico?",
        answers: [
            { text: "Redes FTTH para instalações internas e externas, incluindo vias aéreas com vãos de até 80 metros", correct: true },
            { text: "Aplicações de backbone óptico para interligação de centrais metropolitanas de telecomunicações", correct: false },
            { text: "Instalações submarinas de curta distância", correct: false },
            { text: "Interligação interna de racks em data centers", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Por que este cabo é classificado como autossustentado?",
        answers: [
            { text: "Porque possui elemento metálico dedicado à sustentação mecânica do cabo", correct: true },
            { text: "Porque foi projetado para suportar esforços mecânicos próprios em instalações aéreas", correct: false },
            { text: "Porque utiliza apenas materiais dielétricos", correct: false },
            { text: "Porque permite enterramento direto", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "O que caracteriza o formato Mini Flat Drop deste cabo?",
        answers: [
            { text: "Perfil plano e compacto, ideal para instalações em espaços reduzidos", correct: true },
            { text: "Geometria otimizada para facilitar passagens discretas em ambientes internos e externos", correct: false },
            { text: "Estrutura circular com tubos ópticos", correct: false },
            { text: "Perfil oval com mensageiro externo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual vantagem prática o formato Mini Flat Drop oferece ao instalador?",
        answers: [
            { text: "Facilidade de passagem, melhor acabamento estético e menor impacto visual", correct: true },
            { text: "Maior eficiência visual e organização em instalações residenciais e comerciais", correct: false },
            { text: "Maior capacidade de fibras", correct: false },
            { text: "Eliminação total de caixas ópticas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é o material da capa externa do cabo Speed Star Mini Flat Drop com reforço metálico?",
        answers: [
            { text: "Material termoplástico LSZH, retardante à chama e com baixa emissão de fumaça", correct: true },
            { text: "Composição termoplástica desenvolvida para segurança em ambientes internos e externos", correct: false },
            { text: "PVC flexível convencional", correct: false },
            { text: "Polietileno corrugado subterrâneo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual benefício o uso de LSZH proporciona neste cabo?",
        answers: [
            { text: "Redução da emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "Maior segurança para pessoas em ambientes fechados e áreas de circulação", correct: false },
            { text: "Aumento da condutividade elétrica", correct: false },
            { text: "Redução direta da atenuação óptica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Quais elementos estruturais metálicos estão presentes neste cabo?",
        answers: [
            { text: "Filamentos metálicos para tração e elemento metálico dedicado à sustentação", correct: true },
            { text: "Estrutura metálica projetada para suportar esforços mecânicos e instalação aérea", correct: false },
            { text: "Blindagem metálica contínua", correct: false },
            { text: "Mensageiro externo separado", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é a função dos filamentos metálicos de tração?",
        answers: [
            { text: "Absorver esforços mecânicos durante o lançamento e manuseio do cabo", correct: true },
            { text: "Garantir resistência mecânica durante a instalação e acomodação do cabo", correct: false },
            { text: "Atuar como blindagem eletromagnética", correct: false },
            { text: "Reduzir perdas ópticas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é a função do elemento metálico de sustentação?",
        answers: [
            { text: "Permitir instalação aérea autossustentada em vãos de até 80 metros", correct: true },
            { text: "Garantir suporte mecânico adequado em instalações aéreas de acesso FTTH", correct: false },
            { text: "Atuar como aterramento elétrico", correct: false },
            { text: "Substituir a capa LSZH", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual tipo de fibra óptica é utilizada no cabo Speed Star Mini Flat Drop com reforço metálico?",
        answers: [
            { text: "Fibra monomodo BLI A/B conforme ITU-T G.657 A2", correct: true },
            { text: "Fibra desenvolvida para aplicações FTTH com maior tolerância à curvatura", correct: false },
            { text: "Fibra monomodo G.652 D", correct: false },
            { text: "Fibra multimodo OM3", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual característica da fibra ITU-T G.657 A2 é essencial para este cabo?",
        answers: [
            { text: "Baixa sensibilidade à curvatura, permitindo curvas mais fechadas", correct: true },
            { text: "Maior flexibilidade óptica para instalações em espaços reduzidos", correct: false },
            { text: "Maior diâmetro de núcleo", correct: false },
            { text: "Uso exclusivo externo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Quais configurações de fibras estão disponíveis neste cabo?",
        answers: [
            { text: "01 ou 02 fibras ópticas monomodo", correct: true },
            { text: "Configurações projetadas para aplicações FTTH de baixa densidade", correct: false },
            { text: "Quantidade fixa de quatro fibras", correct: false },
            { text: "Configurações acima de vinte fibras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Quais são as dimensões externas aproximadas do cabo Mini Flat Drop com reforço metálico?",
        answers: [
            { text: "5,2 mm x 2,0 mm ± 0,10 mm", correct: true },
            { text: "Dimensões balanceadas entre resistência mecânica e flexibilidade de instalação", correct: false },
            { text: "3,0 mm x 2,0 mm", correct: false },
            { text: "6,5 mm x 3,0 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é o peso líquido aproximado do cabo por quilômetro?",
        answers: [
            { text: "18 kg/km ± 1,5 kg", correct: true },
            { text: "Peso compatível com instalações aéreas autossustentadas de acesso óptico", correct: false },
            { text: "7,8 kg/km", correct: false },
            { text: "25 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é o raio mínimo de curvatura permitido durante a instalação?",
        answers: [
            { text: "30 mm", correct: true },
            { text: "Raio definido para preservar a integridade mecânica e óptica do cabo", correct: false },
            { text: "15 mm", correct: false },
            { text: "60 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é o raio mínimo de curvatura permitido após a instalação?",
        answers: [
            { text: "15 mm", correct: true },
            { text: "Raio reduzido compatível com instalações definitivas em ambientes residenciais", correct: false },
            { text: "30 mm", correct: false },
            { text: "20 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual norma técnica rege o ensaio de compressão do cabo?",
        answers: [
            { text: "NBR 13507", correct: true },
            { text: "Norma aplicada a ensaios mecânicos de cabos ópticos de telecomunicações", correct: false },
            { text: "NBR 5410", correct: false },
            { text: "IEC 60794-1", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é a faixa de temperatura de operação especificada para este cabo?",
        answers: [
            { text: "-20 °C até +65 °C", correct: true },
            { text: "Faixa adequada para operação em ambientes internos e externos convencionais", correct: false },
            { text: "0 °C até +50 °C", correct: false },
            { text: "-40 °C até +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Como é realizada a marcação da capa externa do cabo?",
        answers: [
            { text: "Gravações a cada 1 metro com identificação do produto, norma, lote e ano", correct: true },
            { text: "Sistema de marcação contínua para rastreabilidade e identificação em campo", correct: false },
            { text: "Etiquetas adesivas periódicas", correct: false },
            { text: "Marcação apenas nas extremidades", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual órgão certifica o cabo Speed Star Mini Flat Drop com reforço metálico no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "Órgão regulador responsável pela certificação de produtos de telecomunicações", correct: false },
            { text: "INMETRO – Cabos elétricos", correct: false },
            { text: "IEC – Cabos submarinos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é a principal finalidade do Conector Óptico Fast Crimp SC-UPC?",
        answers: [
            { text: "Realizar conectorizações rápidas e confiáveis em redes FTTH Single Mode", correct: true },
            { text: "Permitir a terminação óptica em campo de forma prática e padronizada em redes de acesso", correct: false },
            { text: "Executar emendas permanentes por fusão", correct: false },
            { text: "Atuar como adaptador óptico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Em quais cenários o conector Fast Crimp SC-UPC é mais utilizado?",
        answers: [
            { text: "Caixas de assinante, caixas de emenda aéreas e redes FTTH", correct: true },
            { text: "Ambientes de acesso óptico onde é necessária terminação rápida e confiável em campo", correct: false },
            { text: "Backbones ópticos de longa distância", correct: false },
            { text: "Redes ópticas submarinas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o tipo de polimento do Conector Óptico Fast Crimp apresentado?",
        answers: [
            { text: "UPC (Ultra Physical Contact)", correct: true },
            { text: "Polimento físico reto utilizado em aplicações de acesso óptico padrão", correct: false },
            { text: "APC com ângulo de 8 graus", correct: false },
            { text: "PC sem polimento final", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual característica visual identifica um conector SC-UPC?",
        answers: [
            { text: "Cor azul do corpo do conector", correct: true },
            { text: "Identificação visual padronizada para conectores com polimento UPC", correct: false },
            { text: "Cor verde de conector angular", correct: false },
            { text: "Cor preta para uso industrial", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual tipo de fibra óptica é suportado pelo Conector Fast Crimp SC-UPC?",
        answers: [
            { text: "Fibra óptica monomodo (Single Mode)", correct: true },
            { text: "Fibra utilizada em redes FTTH e enlaces ópticos monomodo de acesso", correct: false },
            { text: "Fibra óptica multimodo OM3", correct: false },
            { text: "Fibra híbrida monomodo/multimodo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais normas de fibra óptica são compatíveis com este conector?",
        answers: [
            { text: "ITU-T G.652 D e ITU-T G.657 A", correct: true },
            { text: "Normas de fibra óptica monomodo utilizadas em redes de acesso FTTH", correct: false },
            { text: "Somente fibras G.655", correct: false },
            { text: "Apenas fibras OM3 e OM4", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais tipos de cabos ópticos são indicados para uso com este conector?",
        answers: [
            { text: "Cabos DROP e cordões ópticos de 2 a 3 mm", correct: true },
            { text: "Cabos utilizados em redes FTTH de acesso com diâmetro compatível para conectorização", correct: false },
            { text: "Cabos loose tube de múltiplos tubos", correct: false },
            { text: "Cabos ADSS de grande diâmetro", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o material do ferrolho (ferrule) do Conector Óptico SC-UPC?",
        answers: [
            { text: "Cerâmica de zircônia", correct: true },
            { text: "Material cerâmico de alta precisão utilizado para alinhamento óptico", correct: false },
            { text: "Aço inoxidável polido", correct: false },
            { text: "Alumínio anodizado", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o material predominante do corpo do conector?",
        answers: [
            { text: "Material termoplástico de alta resistência", correct: true },
            { text: "Composto plástico projetado para suportar manuseio e esforço mecânico em campo", correct: false },
            { text: "Metal fundido anticorrosivo", correct: false },
            { text: "Borracha elastomérica flexível", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais são as dimensões aproximadas do Conector Fast Crimp SC-UPC?",
        answers: [
            { text: "8 mm × 7 mm × 58 mm", correct: true },
            { text: "Dimensões compatíveis com conectores SC para aplicações FTTH em campo", correct: false },
            { text: "10 mm × 10 mm × 60 mm", correct: false },
            { text: "6 mm × 6 mm × 45 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é a faixa de temperatura de operação do Conector SC-UPC?",
        answers: [
            { text: "-40 °C até +85 °C", correct: true },
            { text: "Faixa adequada para operação em ambientes internos e externos de telecomunicações", correct: false },
            { text: "0 °C até +50 °C", correct: false },
            { text: "-20 °C até +65 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é a faixa de temperatura de armazenamento do conector?",
        answers: [
            { text: "-50 °C até +90 °C", correct: true },
            { text: "Faixa ampliada para garantir integridade do conector durante estocagem", correct: false },
            { text: "-20 °C até +60 °C", correct: false },
            { text: "0 °C até +50 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quantas vezes o Conector Óptico Fast Crimp SC-UPC pode ser reutilizado?",
        answers: [
            { text: "Até 5 reutilizações, mantendo suas características iniciais", correct: true },
            { text: "Quantidade limitada de reutilizações conforme boas práticas de instalação", correct: false },
            { text: "Uso único", correct: false },
            { text: "Reutilização ilimitada", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o comprimento correto para decapagem do cabo óptico compacto?",
        answers: [
            { text: "45 mm, removendo apenas a capa externa", correct: true },
            { text: "Comprimento padronizado para garantir correta fixação do cabo no conector", correct: false },
            { text: "30 mm removendo capa e fibra", correct: false },
            { text: "20 mm apenas da fibra", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o comprimento correto para remoção do acrilato da fibra?",
        answers: [
            { text: "20 mm", correct: true },
            { text: "Comprimento necessário para garantir correta inserção da fibra no ferrolho", correct: false },
            { text: "12 mm", correct: false },
            { text: "25 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o comprimento correto de clivagem da fibra para este conector?",
        answers: [
            { text: "12 mm", correct: true },
            { text: "Valor padronizado para garantir alinhamento adequado da fibra no conector", correct: false },
            { text: "10 mm", correct: false },
            { text: "15 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais são as principais partes do Conector Óptico SC-UPC?",
        answers: [
            { text: "Rosca de travamento, corpo do conector e capa do conector", correct: true },
            { text: "Componentes responsáveis pela fixação mecânica e proteção da fibra óptica", correct: false },
            { text: "Ferrolho, adaptador e sleeve metálico", correct: false },
            { text: "Conector macho, conector fêmea e adaptador", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais ferramentas são necessárias para realizar a conectorização correta?",
        answers: [
            { text: "Clivador óptico, álcool e papel, decapador de cabo compacto e decapador de fibras", correct: true },
            { text: "Ferramentas básicas de preparação e limpeza para terminação óptica em campo", correct: false },
            { text: "Máquina de fusão", correct: false },
            { text: "Equipamento OTDR", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual órgão certifica o Conector Óptico Fast Crimp SC-UPC no Brasil?",
        answers: [
            { text: "ANATEL", correct: true },
            { text: "FECAP", correct: false },
            { text: "INMETRO", correct: false },
            { text: "IEC", correct: false }
        ]
    },
    {
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é a principal finalidade do Conector Óptico Fast Crimp CLICK SC-UPC?",
    answers: [
        { text: "Realizar conectorizações rápidas e precisas em redes FTTH Single Mode", correct: true },
        { text: "Permitir terminação óptica em campo de forma padronizada e eficiente em redes de acesso", correct: false },
        { text: "Executar emendas ópticas por fusão", correct: false },
        { text: "Interligar cabos backbone multifibras", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Em quais ambientes este conector foi projetado para ser utilizado?",
    answers: [
        { text: "Ambientes internos, áreas controladas, caixas de assinantes e caixas aéreas de emenda", correct: true },
        { text: "Aplicações de acesso FTTH em ambientes protegidos e instalações ópticas de campo", correct: false },
        { text: "Ambientes externos severos", correct: false },
        { text: "Redes submarinas", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é o principal diferencial da tecnologia Fast Crimp CLICK?",
    answers: [
        { text: "Sistema de travamento por clique que dispensa epóxi, polimento em campo e ferramentas especiais", correct: true },
        { text: "Tecnologia que simplifica a conectorização ao eliminar processos manuais complexos", correct: false },
        { text: "Uso obrigatório de máquina de fusão", correct: false },
        { text: "Fixação por soldagem térmica", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual benefício prático a tecnologia CLICK traz ao instalador?",
    answers: [
        { text: "Redução do tempo de instalação e maior padronização da conectorização", correct: true },
        { text: "Aumento de produtividade e repetibilidade no processo de instalação em campo", correct: false },
        { text: "Eliminação da clivagem", correct: false },
        { text: "Dispensa limpeza da fibra", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é o tipo de conector e polimento deste produto?",
    answers: [
        { text: "SC-UPC (Ultra Physical Contact)", correct: true },
        { text: "Conector SC com polimento físico reto para aplicações de acesso óptico", correct: false },
        { text: "SC-APC angular", correct: false },
        { text: "LC-UPC compacto", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual característica visual identifica um conector SC-UPC?",
    answers: [
        { text: "Cor azul no corpo ou na identificação do conector", correct: true },
        { text: "Identificação visual padronizada utilizada para conectores com polimento UPC", correct: false },
        { text: "Cor verde angular", correct: false },
        { text: "Cor preta industrial", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Quais tipos de fibra óptica são compatíveis com o Conector Fast Crimp CLICK SC-UPC?",
    answers: [
        { text: "Fibras monomodo ITU-T G.652 D e ITU-T G.657 A", correct: true },
        { text: "Fibras monomodo utilizadas em redes FTTH e enlaces ópticos de acesso", correct: false },
        { text: "Somente fibras OM3", correct: false },
        { text: "Fibras híbridas", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Quais tipos de cabos ópticos são indicados para este conector?",
    answers: [
        { text: "Cabos Mini Flat DROP Speed Star e cordões ópticos de 2 a 3 mm", correct: true },
        { text: "Cabos de acesso FTTH com dimensões compatíveis para conectorização em campo", correct: false },
        { text: "Cabos loose tube", correct: false },
        { text: "Cabos ADSS", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é o material do ferrolho (ferrule) utilizado neste conector?",
    answers: [
        { text: "Cerâmica de zircônia de alta precisão", correct: true },
        { text: "Material cerâmico desenvolvido para alinhamento preciso da fibra óptica", correct: false },
        { text: "Aço inoxidável", correct: false },
        { text: "Alumínio anodizado", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual material é utilizado no corpo do conector Fast Crimp CLICK SC-UPC?",
    answers: [
        { text: "Material termoplástico de alta resistência mecânica", correct: true },
        { text: "Composto plástico projetado para suportar esforços de instalação em campo", correct: false },
        { text: "Metal fundido", correct: false },
        { text: "Borracha flexível", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Quais são as dimensões aproximadas do Conector Fast Crimp CLICK SC-UPC?",
    answers: [
        { text: "8,9 mm × 7,4 mm × 53 mm", correct: true },
        { text: "Dimensões compatíveis com conectores SC para uso em redes FTTH", correct: false },
        { text: "10 mm × 10 mm × 60 mm", correct: false },
        { text: "6 mm × 6 mm × 45 mm", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é a faixa de temperatura de operação do conector Fast Crimp CLICK SC-UPC?",
    answers: [
        { text: "-40 °C até +80 °C", correct: true },
        { text: "Faixa adequada para operação em ambientes internos e externos de telecomunicações", correct: false },
        { text: "-20 °C até +65 °C", correct: false },
        { text: "0 °C até +50 °C", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é a faixa de temperatura de armazenamento do conector?",
    answers: [
        { text: "-40 °C até +80 °C", correct: true },
        { text: "Faixa térmica especificada para preservar a integridade do conector durante estocagem", correct: false },
        { text: "-20 °C até +60 °C", correct: false },
        { text: "0 °C até +50 °C", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Quantas vezes o Conector Fast Crimp CLICK SC-UPC pode ser reutilizado?",
    answers: [
        { text: "Até 5 reutilizações mantendo as características de inserção", correct: true },
        { text: "Quantidade limitada de reutilizações conforme boas práticas de instalação", correct: false },
        { text: "Uso único", correct: false },
        { text: "Reutilização ilimitada", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é o comprimento correto para decapagem do cabo óptico DROP antes da conectorização?",
    answers: [
        { text: "50 mm de remoção da capa externa", correct: true },
        { text: "Comprimento padronizado para correta fixação do cabo no conector", correct: false },
        { text: "30 mm removendo capa e fibra", correct: false },
        { text: "20 mm apenas da fibra", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual é o comprimento correto para remoção do acrilato da fibra óptica?",
    answers: [
        { text: "20 mm", correct: true },
        { text: "Comprimento necessário para garantir correta inserção da fibra no ferrolho", correct: false },
        { text: "10 mm", correct: false },
        { text: "30 mm", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Após a clivagem, qual deve ser o comprimento total da fibra?",
    answers: [
        { text: "29,4 ± 0,1 mm", correct: true },
        { text: "Valor definido para garantir alinhamento preciso da fibra no conector", correct: false },
        { text: "25 ± 0,5 mm", correct: false },
        { text: "32 ± 0,2 mm", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Quais são as principais partes do Conector Óptico Fast Crimp CLICK SC-UPC?",
    answers: [
        { text: "Corpo do conector, braçadeira removível, tampa de fixação, capa e grampo de abertura", correct: true },
        { text: "Componentes responsáveis pela fixação mecânica e proteção da fibra óptica", correct: false },
        { text: "Ferrolho e sleeve metálico", correct: false },
        { text: "Conector macho e adaptador", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Quais ferramentas são necessárias para realizar a conectorização correta?",
    answers: [
        { text: "Decapador de DROP, decapador de acrilato, clivador óptico, álcool e papel", correct: true },
        { text: "Ferramentas básicas de preparação e limpeza para terminação óptica em campo", correct: false },
        { text: "Máquina de fusão", correct: false },
        { text: "OTDR obrigatório", correct: false }
    ]
},
{
    category: "fiber",
    product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
    question: "Qual órgão certifica o Conector Óptico Fast Crimp CLICK SC-UPC no Brasil?",
    answers: [
        { text: "ANATEL", correct: true },
        { text: "ITA", correct: false },
        { text: "INMETRO", correct: false },
        { text: "IEC", correct: false }
    ]
},    
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é o objetivo principal do FT KIT PRO Transcend?",
    answers: [
        { text: "Oferecer um conjunto completo de ferramentas para instalação, conectorização e testes em redes FTTH", correct: true },
        { text: "Disponibilizar uma solução integrada para atividades de campo em redes de acesso óptico FTTH", correct: false },
        { text: "Executar fusões ópticas automáticas", correct: false },
        { text: "Realizar medições OTDR de longa distância", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Para qual perfil de profissional o FT KIT PRO Transcend é indicado?",
    answers: [
        { text: "Técnicos, instaladores e provedores que atuam em redes FTTH e acesso óptico", correct: true },
        { text: "Profissionais de telecomunicações que realizam instalações e ativações FTTH em campo", correct: false },
        { text: "Engenheiros de redes submarinas", correct: false },
        { text: "Usuários domésticos sem conhecimento técnico", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual característica define o FT KIT PRO Transcend como um kit profissional?",
    answers: [
        { text: "Reúne ferramentas de preparação, conectorização, inspeção e teste óptico em um único conjunto", correct: true },
        { text: "Integra diferentes ferramentas essenciais para execução completa de atividades FTTH", correct: false },
        { text: "Contém apenas ferramentas manuais básicas", correct: false },
        { text: "É focado apenas em redes elétricas", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é a principal vantagem de adquirir um kit completo em vez de ferramentas avulsas?",
    answers: [
        { text: "Padronização do processo de instalação e ganho de produtividade em campo", correct: true },
        { text: "Maior eficiência operacional e redução do tempo de atendimento técnico", correct: false },
        { text: "Substituição de equipamentos de fusão", correct: false },
        { text: "Redução automática da atenuação", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é a função do clivador óptico presente no FT KIT PRO Transcend?",
    answers: [
        { text: "Realizar o corte preciso da fibra óptica antes da conectorização", correct: true },
        { text: "Garantir clivagem adequada da fibra para alinhamento correto no conector", correct: false },
        { text: "Fundir fibras ópticas", correct: false },
        { text: "Medir potência óptica", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Por que a qualidade do clivador é essencial em redes FTTH?",
    answers: [
        { text: "Porque influencia diretamente na perda de inserção do conector", correct: true },
        { text: "Porque garante melhor desempenho óptico e redução de perdas no enlace", correct: false },
        { text: "Porque define o comprimento do enlace", correct: false },
        { text: "Porque elimina a refletância", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é a principal função do medidor de potência óptica incluído no kit?",
    answers: [
        { text: "Medir a potência do sinal óptico recebido em enlaces FTTH", correct: true },
        { text: "Avaliar o nível de sinal óptico durante testes e ativações em campo", correct: false },
        { text: "Realizar clivagem automática", correct: false },
        { text: "Atuar como VFL permanente", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é a função da caneta localizadora visual (VFL) presente no kit?",
    answers: [
        { text: "Identificar quebras, microcurvaturas e conexões incorretas na fibra", correct: true },
        { text: "Permitir inspeção visual do caminho óptico em curtas distâncias", correct: false },
        { text: "Realizar fusões ópticas", correct: false },
        { text: "Substituir o OTDR", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Por que a caneta óptica para teste de luz (VFL) é amplamente utilizada em instalações FTTH?",
    answers: [
        { text: "Porque permite inspeção visual rápida e prática em curtas distâncias", correct: true },
        { text: "Porque facilita a identificação imediata de falhas visíveis na fibra", correct: false },
        { text: "Porque mede potência com precisão", correct: false },
        { text: "Porque elimina o medidor de potência", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é a função do decapador de cabo DROP presente no FT KIT PRO Transcend?",
    answers: [
        { text: "Remover a capa externa do cabo óptico sem danificar a fibra", correct: true },
        { text: "Preparar o cabo DROP para conectorização de forma segura e padronizada", correct: false },
        { text: "Cortar a fibra óptica", correct: false },
        { text: "Medir o diâmetro da fibra", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é a função do decapador de acrilato incluído no kit?",
    answers: [
        { text: "Remover o revestimento acrilato da fibra óptica antes da clivagem", correct: true },
        { text: "Preparar a fibra óptica para clivagem sem causar danos ao núcleo", correct: false },
        { text: "Remover a capa do cabo DROP", correct: false },
        { text: "Limpar a face do conector", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Por que o kit inclui itens de limpeza óptica?",
    answers: [
        { text: "Para evitar perdas de inserção causadas por sujeira na fibra ou no conector", correct: true },
        { text: "Para garantir qualidade óptica e reduzir falhas por contaminação", correct: false },
        { text: "Para eliminar a clivagem", correct: false },
        { text: "Para substituir conectores pré-polidos", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Quais itens são comumente utilizados para limpeza óptica em campo?",
    answers: [
        { text: "Lenços sem fiapos, álcool isopropílico e caneta de limpeza", correct: true },
        { text: "Itens específicos para limpeza e manutenção de conectores ópticos", correct: false },
        { text: "Pano comum e detergente", correct: false },
        { text: "Escova metálica e solvente", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual é a função da bolsa ou maleta que acompanha o FT KIT PRO Transcend?",
    answers: [
        { text: "Proteger, organizar e facilitar o transporte das ferramentas", correct: true },
        { text: "Garantir organização e mobilidade durante atendimentos em campo", correct: false },
        { text: "Atuar como EPI elétrico", correct: false },
        { text: "Substituir caixas de emenda", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual vantagem a organização adequada do kit traz ao técnico em campo?",
    answers: [
        { text: "Agilidade no atendimento e redução de erros durante a instalação", correct: true },
        { text: "Maior eficiência operacional e menor retrabalho em campo", correct: false },
        { text: "Aumento automático da qualidade do sinal", correct: false },
        { text: "Eliminação de testes finais", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Em qual etapa de uma instalação FTTH o FT KIT PRO Transcend é utilizado?",
    answers: [
        { text: "Desde a preparação do cabo até a conectorização e testes finais", correct: true },
        { text: "Durante todas as etapas operacionais de instalação e ativação FTTH", correct: false },
        { text: "Apenas na fase de projeto", correct: false },
        { text: "Somente em backbone", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Por que um kit profissional é essencial para provedores FTTH?",
    answers: [
        { text: "Garante padronização, qualidade e repetibilidade nas instalações", correct: true },
        { text: "Assegura consistência técnica e qualidade nas ativações de clientes", correct: false },
        { text: "Elimina falhas humanas", correct: false },
        { text: "Dispensa normas técnicas", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Qual diferencial comercial o FT KIT PRO Transcend oferece ao instalador ou provedor?",
    answers: [
        { text: "Solução completa pronta para uso em campo, reduzindo tempo de atendimento", correct: true },
        { text: "Pacote profissional que agrega valor e produtividade aos serviços FTTH", correct: false },
        { text: "Uso exclusivo com uma única marca", correct: false },
        { text: "Dependência de software proprietário", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Quais são os dois itens opcionais que podem ser adquiridos separadamente para complementar o FT KIT PRO Transcend?",
    answers: [
        { text: "Decapador circular para cabos ópticos e decapador horizontal para sangria de cabos ópticos", correct: true },
        { text: "Ferramentas adicionais para preparação avançada de cabos ópticos em campo", correct: false },
        { text: "Conectores SC-APC e LC-UPC", correct: false },
        { text: "OTDR portátil e microscópio óptico", correct: false }
    ]
}, 
{
    category: "fiber",
    product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
    question: "Quais itens estão inclusos no FT KIT PRO Transcend – Kit Profissional para fibra óptica?",
    answers: [
        {
            text: "Mala para transporte, medidor de potência óptica (Power Meter), caneta óptica para teste de luz, clivador óptico, decapador de cabo óptico Mini Flat Drop, decapador de acrilato, alicate de corte de arame, álcool isopropílico, decapador horizontal para sangria de loose tube, tesoura para corte de aramida, caneta de limpeza, bastões de limpeza para conectores, tubetes para proteção da fusão das fibras ópticas",
            correct: true
        },
        {
            text: "Maleta rígida para transporte, máquina de fusão óptica de alta precisão, OTDR portátil para medições avançadas, clivador óptico automático profissional, decapador circular de cabos ópticos, decapador de acrilato, álcool etílico técnico, tesoura universal reforçada, alicate universal isolado, conectores SC-APC, adaptadores ópticos diversos, caneta VFL de alta potência, bastões de limpeza e protetores de conector",
            correct: false
        },
        {
            text: "Bolsa de ferramentas, medidor de potência óptica básico, localizador visual VFL, clivador óptico simples, decapador de cabo DROP convencional, decapador circular, álcool isopropílico, pano sem fiapos, tesoura comum, alicate de crimpar RJ45, adaptadores SC-UPC, conectores rápidos, protetores de emenda e estojo plástico",
            correct: false
        },
        {
            text: "Mala de transporte, analisador OTDR, fonte de luz óptica, microscópio de inspeção, clivador óptico automático, decapador de acrilato, decapador longitudinal, álcool isopropílico, tesoura de precisão, alicate de corte, conectores LC-UPC, adaptadores híbridos, bastões de limpeza e estojo metálico",
            correct: false
        }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é o objetivo principal do FT KIT Básico?",
    answers: [
        { text: "Atender instalações e manutenções básicas em redes FTTH com ferramentas essenciais", correct: true },
        { text: "Fornecer um conjunto inicial de ferramentas para operações FTTH simples em campo com baixo custo operacional", correct: false },
        { text: "Executar certificações ópticas de backbone", correct: false },
        { text: "Atuar exclusivamente em redes de data center", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Para qual perfil de profissional o FT KIT Básico é mais indicado?",
    answers: [
        { text: "Instaladores FTTH iniciantes ou operações de campo com baixa complexidade", correct: true },
        { text: "Profissionais em início de atuação que realizam instalações FTTH simples e atendimentos de rotina", correct: false },
        { text: "Equipes especializadas em backbone", correct: false },
        { text: "Ambientes laboratoriais", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "O que diferencia o FT KIT Básico de um kit profissional completo?",
    answers: [
        { text: "A presença apenas das ferramentas essenciais para instalação e testes básicos", correct: true },
        { text: "A composição reduzida focada em tarefas básicas de instalação e verificação FTTH em campo", correct: false },
        { text: "A inclusão de equipamentos de fusão", correct: false },
        { text: "O foco em redes elétricas", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é a principal vantagem de um kit básico em operações FTTH?",
    answers: [
        { text: "Agilidade, menor custo e praticidade para atendimentos simples", correct: true },
        { text: "Maior rapidez operacional e redução de investimento para serviços FTTH de baixa complexidade", correct: false },
        { text: "Maior precisão em enlaces longos", correct: false },
        { text: "Eliminação do treinamento", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é a função do medidor de potência óptica presente no FT KIT Básico?",
    answers: [
        { text: "Medir o nível de potência óptica recebido no ponto de atendimento", correct: true },
        { text: "Permitir a verificação básica do sinal óptico recebido durante ativações FTTH em campo", correct: false },
        { text: "Localizar falhas por reflexão", correct: false },
        { text: "Atuar como fonte de luz", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é a principal função da caneta óptica (VFL) no FT KIT Básico?",
    answers: [
        { text: "Identificar quebras, microcurvaturas e conexões incorretas na fibra", correct: true },
        { text: "Permitir inspeção visual rápida do caminho óptico em enlaces curtos", correct: false },
        { text: "Executar fusões ópticas", correct: false },
        { text: "Substituir OTDR", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Por que o VFL é considerado uma ferramenta essencial em kits básicos FTTH?",
    answers: [
        { text: "Permite diagnóstico rápido e visual em enlaces curtos", correct: true },
        { text: "Facilita a identificação imediata de falhas visíveis durante instalações FTTH simples", correct: false },
        { text: "Possui maior alcance que OTDR", correct: false },
        { text: "Mede atenuação com precisão", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é a função do clivador óptico incluído no FT KIT Básico?",
    answers: [
        { text: "Realizar o corte preciso da fibra antes da conectorização", correct: true },
        { text: "Garantir clivagem adequada para correto alinhamento da fibra no conector", correct: false },
        { text: "Fundir fibras", correct: false },
        { text: "Inspecionar ferrolho", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual impacto uma clivagem mal executada pode causar?",
    answers: [
        { text: "Aumento da perda de inserção e falhas na conectorização", correct: true },
        { text: "Comprometimento do desempenho óptico devido a desalinhamento da fibra no conector", correct: false },
        { text: "Aumento da potência transmitida", correct: false },
        { text: "Melhoria do enlace", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é a função do decapador de cabo óptico presente no FT KIT Básico?",
    answers: [
        { text: "Remover a capa externa do cabo sem danificar a fibra", correct: true },
        { text: "Preparar o cabo óptico para conectorização preservando a integridade da fibra", correct: false },
        { text: "Cortar a fibra", correct: false },
        { text: "Medir o núcleo", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é a função do decapador de acrilato incluído no kit?",
    answers: [
        { text: "Remover o revestimento acrilato da fibra antes da clivagem", correct: true },
        { text: "Preparar a fibra para clivagem sem causar danos ao núcleo óptico", correct: false },
        { text: "Remover capa do cabo DROP", correct: false },
        { text: "Polir fibra", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Por que itens de limpeza óptica são importantes mesmo em um kit básico?",
    answers: [
        { text: "Para evitar perdas ópticas causadas por sujeira e contaminação", correct: true },
        { text: "Para garantir qualidade óptica mínima durante instalações FTTH básicas", correct: false },
        { text: "Para aumentar potência do transmissor", correct: false },
        { text: "Para eliminar refletância", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é a função da bolsa ou maleta que acompanha o FT KIT Básico?",
    answers: [
        { text: "Organizar e facilitar o transporte das ferramentas essenciais", correct: true },
        { text: "Garantir organização e mobilidade durante atendimentos FTTH simples", correct: false },
        { text: "Atuar como caixa de emenda", correct: false },
        { text: "Substituir equipamentos avançados", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Em qual etapa de uma instalação FTTH o FT KIT Básico é utilizado?",
    answers: [
        { text: "Na preparação do cabo, conectorização e verificação básica do sinal", correct: true },
        { text: "Durante etapas iniciais de instalação e validação básica do enlace FTTH", correct: false },
        { text: "Somente no projeto", correct: false },
        { text: "Apenas em backbone", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual limitação técnica é esperada ao utilizar apenas o FT KIT Básico?",
    answers: [
        { text: "Diagnóstico limitado em comparação a kits com OTDR e fusão óptica", correct: true },
        { text: "Limitação na análise avançada de falhas ópticas em comparação a kits profissionais", correct: false },
        { text: "Impossibilidade de testes", correct: false },
        { text: "Incompatibilidade FTTH", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Qual é o principal diferencial comercial do FT KIT Básico?",
    answers: [
        { text: "Baixo custo aliado às ferramentas essenciais para operação FTTH", correct: true },
        { text: "Solução econômica para instalações FTTH simples e de rápida execução", correct: false },
        { text: "Alta automação", correct: false },
        { text: "Dependência de software", correct: false }
    ]
},
{
    category: "fiber",
    product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
    question: "Quais itens compõem o FT KIT Básico de ferramentas para instalações FTTH?",
    answers: [
        {
            text: "Maleta para transporte, medidor de potência óptica (power meter), caneta óptica para teste de luz, clivador óptico, decapador de cabo óptico Mini Flat Drop, decapador de acrilato e reservatório para álcool isopropílico",
            correct: true
        },
        {
            text: "Maleta para transporte, medidor de potência óptica, OTDR portátil para análise avançada de enlaces, máquina de fusão óptica profissional, clivador óptico automático de alta precisão, decapador universal de cabos, caneta de limpeza para conectores ópticos e bastões de limpeza para manutenção completa",
            correct: false
        },
        {
            text: "Bolsa de ferramentas, medidor de potência óptica, caneta óptica, máquina de fusão, decapador de acrilato, álcool isopropílico e tubetes",
            correct: false
        },
        {
            text: "Maleta rígida, medidor de potência, caneta VFL, clivador óptico, decapador circular, tesoura para aramida e bastões de limpeza",
            correct: false
        }
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
