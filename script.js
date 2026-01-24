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
            { text: "Polietileno de alta densidade (HDPE) com aditivos anti-chama halogenados", correct: false },
            { text: "PVC flexível com proteção UV e aditivos antiestáticos", correct: false },
            { text: "Polímero termofixo com revestimento metálico anticorrosivo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual tipo de fibra óptica é utilizada no cabo Speed Star Mini Flat Drop e qual seu diferencial?",
        answers: [
            { text: "Fibra monomodo ITU-T G.657 A2, que possui baixa sensibilidade a curvaturas acentuadas", correct: true },
            { text: "Fibra multimodo OM3, otimizada para transmissões de altíssima velocidade em curtas distâncias", correct: false },
            { text: "Fibra monomodo G.652 D, padrão para backbones de longa distância sem proteção a dobras", correct: false },
            { text: "Fibra plástica (POF) para conexões de rede doméstica de baixo custo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Para qual cenário de instalação este cabo foi especificamente projetado?",
        answers: [
            { text: "Redes FTTH para atendimento ao cliente final, suportando uso interno e externo (aéreo)", correct: true },
            { text: "Lançamentos submarinos destinados à interligação de continentes por meio de sistemas de comunicação", correct: false },
            { text: "Redes industriais com alta exposição a campos eletromagnéticos de alta tensão", correct: false },
            { text: "Cabeamento estruturado horizontal exclusivo para data centers", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Quais materiais compõem os elementos de tração e sustentação deste cabo?",
        answers: [
            { text: "Tração por filamentos de FRP (dielétrico) e sustentação por elemento metálico revestido", correct: true },
            { text: "Tração e sustentação feitas exclusivamente por fios de aramida (Kevlar)", correct: false },
            { text: "Ambos os elementos são fabricados em aço galvanizado, sem revestimento metáiico adicional.", correct: false },
            { text: "Utiliza apenas uma capa reforçada de PVC, sem elementos internos de tração", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual é o vão máximo recomendado e a faixa de temperatura de operação para este cabo?",
        answers: [
            { text: "Vão de até 80 metros e temperatura entre -20 °C e +65 °C", correct: true },
            { text: "Vão de até 120 metros e temperatura entre 0 °C e +70 °C", correct: false },
            { text: "Vão limitado a 40 metros e temperatura entre -40 °C e +85 °C", correct: false },
            { text: "Vão de 200 metros e temperatura estável em 25 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Sobre os raios de curvatura permitidos, quais são os limites durante e após a instalação?",
        answers: [
            { text: "Mínimo de 30 mm durante a instalação e 15 mm após a instalação concluída", correct: true },
            { text: "Mínimo de 60 mm durante a instalação e 30 mm após a instalação concluída", correct: false },
            { text: "Mínimo de 15 mm em ambos os casos para facilitar a montagem em caixas pequenas", correct: false },
            { text: "Não há limite de curvatura devido ao uso da fibra G.657 A2", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Qual certificação brasileira regulamenta este produto para uso em redes de telecomunicações?",
        answers: [
            { text: "ANATEL – Conforme o Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Categoria de equipamentos eletroeletrônicos", correct: false },
            { text: "ISO 14001 – Gestão ambiental de materiais plásticos", correct: false },
            { text: "NR-10 – Segurança em instalações elétricas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Quais as dimensões nominais da seção transversal deste cabo 'Mini Flat'?",
        answers: [
            { text: "5,0 mm x 2,0 mm", correct: true },
            { text: "8,0 mm x 4,0 mm", correct: false },
            { text: "3,0 mm x 1,0 mm", correct: false },
            { text: "10,0 mm x 5,0 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "O que significa a característica LSZH da capa externa deste cabo?",
        answers: [
            { text: "Low Smoke Zero Halogen: em caso de incêndio, emite pouca fumaça e nenhum gás tóxico", correct: true },
            { text: "Long Size Zero Humidity: proteção total contra submersão prolongada em água", correct: false },
            { text: "Light Shield Zero Heat: proteção térmica contra exposição direta ao sol", correct: false },
            { text: "Low Speed Zero Hazard: material focado em instalações de baixa velocidade de dados", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.GFRP – Cabo Óptico Speed Star Mini Flat Drop Dielétrico",
        question: "Quantas fibras ópticas estão disponíveis para escolha neste modelo de cabo?",
        answers: [
            { text: "Opções com 01 ou 02 fibras ópticas", correct: true },
            { text: "Somente cabos com 12 fibras", correct: false },
            { text: "Configurações de 01 a 24 fibras no mesmo micro duto", correct: false },
            { text: "Múltiplos de 06 fibras (6, 12, 18, 24)", correct: false }
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
        question: "Qual material é utilizado como elemento central de sustentação e por que ele é importante?",
        answers: [
            { text: "FRP (Fiber Reinforced Plastic), por ser um material dielétrico que evita descargas elétricas e oferece alta resistência mecânica", correct: true },
            { text: "Aço galvanizado, para garantir que o cabo possa ser aterrado em toda a sua extensão", correct: false },
            { text: "Kevlar trançado, para permitir que o cabo seja extremamente flexível em instalações internas", correct: false },
            { text: "Alumínio extrudado, empregado com o objetivo de reduzir o peso total do cabo, especialmente em vãos superiores a 200 metrosl", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é a função do fio de rasgamento (rip cord) presente na estrutura do cabo?",
        answers: [
            { text: "Facilitar a abertura controlada da capa externa para acesso às fibras sem danificar o núcleo", correct: true },
            { text: "Servir como o elemento principal de tração durante o lançamento aéreo", correct: false },
            { text: "Atuar como um guia físico para a fusão das fibras ópticas", correct: false },
            { text: "Garantir a continuidade elétrica ao longo do sistema, possibilitando a detecção de rompimentos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "O que caracteriza o 'núcleo seco' e qual o papel do fio bloqueador de água (water blocking)?",
        answers: [
            { text: "Uso de fios que absorvem umidade e expandem, criando uma barreira física que impede a propagação de água", correct: true },
            { text: "Ausência de qualquer proteção contra umidade para tornar o cabo mais leve", correct: false },
            { text: "Preenchimento total do tubo com gel hidrofóbico para facilitar a limpeza das fibras", correct: false },
            { text: "Uso de uma blindagem metálica estanque para proteger as fibras da oxidação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual tipo de fibra óptica é utilizada no ASU80 Advantage?",
        answers: [
            { text: "Fibra monomodo G.652 D", correct: true },
            { text: "Fibra monomodo G.657 A5", correct: false },
            { text: "Fibra multimodo OM4", correct: false },
            { text: "Fibra monomodo G.652 DS", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é a capacidade máxima de fibras e como elas são identificadas?",
        answers: [
            { text: "Até 12 fibras ópticas, identificadas por um código de cores conforme o padrão ANATEL", correct: true },
            { text: "Até 24 fibras, identificadas por marcações numéricas a cada metro", correct: false },
            { text: "Até 6 fibras, identificadas pela espessura de cada filamento", correct: false },
            { text: "Sempre composto por 8 fibras, devidamente identificadas por anéis coloridos, facilitando a identificação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Para qual aplicação principal e vão máximo este cabo é indicado?",
        answers: [
            { text: "Instalações aéreas externas autossustentadas com vãos de até 80 metros", correct: true },
            { text: "Lançamentos em dutos subterrâneos com vãos de 120 metros", correct: false },
            { text: "Interligação interna de racks em ambientes controlados (Data Centers)", correct: false },
            { text: "Redes FTTH de assinantes (Drop) com vãos máximos de 40 metros", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual é o diâmetro externo nominal?",
        answers: [
            { text: "Cerca de 7,0 mm", correct: true },
            { text: "Cerca de 10,0 mm", correct: false },
            { text: "Cerca de 5,0 mm", correct: false },
            { text: "Cerca de 8,5 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Quais são as faixas de temperatura especificadas para instalação e operação?",
        answers: [
            { text: "Instalação: -10 °C a +60 °C; Operação: -20 °C a +65 °C", correct: true },
            { text: "Instalação: 0 °C a +40 °C; Operação: -10 °C a +50 °C", correct: false },
            { text: "Instalação: -20 °C a +65 °C; Operação: -40 °C a +85 °C", correct: false },
            { text: "O cabo não possui restrições térmicas por ser dielétrico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "O que significam as siglas ASU e NR na identificação deste produto?",
        answers: [
            { text: "ASU: Autossustentado com tubo Único; NR: Não Retardante à chama", correct: true },
            { text: "ASU: Aplicação Subterrânea Universal; NR: Núcleo Reforçado", correct: false },
            { text: "ASU: Aterramento de Segurança Unitário; NR: Norma Residencial", correct: false },
            { text: "ASU: Alta Sustentação Urbana; NR: Nível Reduzido de atenuação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Qual órgão regulamenta este cabo no Brasil e qual resolução ele atende?",
        answers: [
            { text: "ANATEL – Conforme o Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Conforme a Portaria de cabos de energia", correct: false },
            { text: "ABNT – Exclusivamente pela norma NBR 14733", correct: false },
            { text: "SINDITELEBRAS – Pelo manual de boas práticas de fibra", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "Por que o modelo ASU80 Advantage utiliza a tecnologia 'Loose Tube'?",
        answers: [
            { text: "Para permitir que as fibras fiquem livres de tensões mecânicas externas aplicadas à capa do cabo", correct: true },
            { text: "Para aumentar a rigidez do cabo e evitar que ele balance com o vento", correct: false },
            { text: "Para garantir que o cabo possa ser crimpado como um cabo de rede comum", correct: false },
            { text: "Para reduzir o diâmetro do cabo ao máximo, sacrificando a resistência", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.ADV.XF.ASU80 – Cabo Óptico ASU80 Advantage",
        question: "O fato de ser um cabo 'dielétrico' traz qual vantagem principal nas cidades?",
        answers: [
            { text: "Pode ser instalado próximo à rede elétrica sem risco de condução de raios ou indução eletromagnética", correct: true },
            { text: "Permite que o cabo seja utilizado para transmitir energia PoE junto com os dados", correct: false },
            { text: "Torna o cabo imune à radiação UV, dispensando proteção na capa", correct: false },
            { text: "Facilita a localização do cabo por baixo da terra usando detectores de metal", correct: false }
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
            { text: "A resistência mecânica projetada para suportar diferentes comprimentos de vãos aéreos", correct: true },
            { text: "O tipo de fibra óptica (Monomodo ou Multimodo) utilizada em cada modelo", correct: false },
            { text: "A quantidade fixa de fibras, sendo 80, 120 ou 200 fibras respectivamente em cada modelo", correct: false },
            { text: "A aplicação exclusiva para redes internas (AS80) ou externas (AS200)", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é a função técnica dos 'loose tubes' e da geléia em sua construção?",
        answers: [
            { text: "Proteger as fibras contra esforços mecânicos, esmagamento e facilitar a movimentação interna", correct: true },
            { text: "Atuar como o principal elemento de tração para sustentar o cabo no poste", correct: false },
            { text: "Garantir o isolamento elétrico das fibras contra descargas atmosféricas", correct: false },
            { text: "Aumentar a rigidez do cabo, de forma a evitar que ele balance com a ação do vento, garantindo maior estabilidade", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "De qual material é composta a capa externa e qual sua principal proteção?",
        answers: [
            { text: "Polietileno (PE) com aditivos para resistência aos raios UV e intempéries externas", correct: true },
            { text: "PVC flexível retardante à chama para uso exclusivo em ambientes confinados e restritos", correct: false },
            { text: "Polímero LSZH com baixa emissão de fumaça para evitar toxicidade em incêndios", correct: false },
            { text: "Borracha vulcanizada para suportar imersão prolongada em água", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual tipo de fibra óptica e revestimento primário são utilizados nesta linha?",
        answers: [
            { text: "Fibra monomodo ITU-T G.652 D com revestimento em acrilato curado com UV", correct: true },
            { text: "Fibra multimodo OM3 com revestimento cerâmico de alta resistência", correct: false },
            { text: "Fibra monomodo G.657 A2 com capa de polietileno de alta densidade", correct: false },
            { text: "Fibra híbrida com blindagem metálica anticorrosiva individual", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual é a capacidade máxima de fibras suportada por este cabo e como ela afeta suas dimensões?",
        answers: [
            { text: "Suporta de 2 até 144 fibras, e o diâmetro externo aumenta conforme cresce o número de fibras", correct: true },
            { text: "Suporta no máximo 12 fibras, mantendo um diâmetro fixo de 7mm", correct: false },
            { text: "Suporta até 48 fibras, com diâmetro reduzido para instalações aéreas urbanas", correct: false },
            { text: "A capacidade é fixa em 144 fibras para todos os modelos da linha AS", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Como é definida a força de tração máxima (carga de operação) para este cabo?",
        answers: [
            { text: "É proporcional a 1 vez o peso do cabo por quilômetro, variando conforme o vão projetado", correct: true },
            { text: "É um valor fixo de 1000N para todos os modelos da linha Speed Star", correct: false },
            { text: "Depende exclusivamente da espessura da capa externa de polietileno", correct: false },
            { text: "É definida pela quantidade de fibras monomodo presentes no núcleo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Quais são os limites de raio de curvatura para garantir a integridade do cabo?",
        answers: [
            { text: "20 vezes o diâmetro externo durante a instalação e 10 vezes após a instalação", correct: true },
            { text: "10 vezes o diâmetro externo em qualquer situação de manuseio", correct: false },
            { text: "Um raio fixo de 30 mm para instalação e 15 mm para operação", correct: false },
            { text: "5 vezes o diâmetro externo para evitar macrocurvaturas na fibra G.652 D", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Quais são as faixas de temperatura especificadas para instalação e operação deste cabo?",
        answers: [
            { text: "Instalação: -10 °C a +50 °C; Operação: -20 °C a +65 °C", correct: true },
            { text: "Instalação: 0 °C a +60 °C; Operação: -40 °C a +85 °C", correct: false },
            { text: "Instalação: -20 °C a +65 °C; Operação: -10 °C a +70 °C", correct: false },
            { text: "O cabo não possui restrições térmicas por ser totalmente dielétrico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "O que significa a sigla 'AS' na identificação deste produto?",
        answers: [
            { text: "Auto-Sustentável: o cabo possui elementos de tração próprios para suportar o próprio peso entre postes", correct: true },
            { text: "Alta Sensibilidade: indica que as fibras são do tipo G.657 A2 para curvas", correct: false },
            { text: "Aplicação subterrânea: indica que o cabo pode ser enterrado diretamente no solo, sem utilização de dutos", correct: false },
            { text: "Aterramento Simples: indica a presença de um fio mensageiro metálico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Qual norma regulamenta este cabo no mercado brasileiro?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Normas para cabos de transmissão de energia", correct: false },
            { text: "ISO 11801 – Padrão internacional para cabeamento estruturado", correct: false },
            { text: "TIA/EIA 568 – Padrão para redes locais de computadores", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.AS80 / AS120 / AS200 – Cabo Óptico Speed Star Auto-Sustentável",
        question: "Por que a tecnologia de extrusão e os loose tubes são fundamentais para este cabo?",
        answers: [
            { text: "Proporcionam flexibilidade e evitam que as tensões de tração nos postes cheguem diretamente às fibras", correct: true },
            { text: "Permitem que o cabo conduza eletricidade para alimentar caixas de atendimento (CTOs)", correct: false },
            { text: "Garantem que o cabo seja totalmente imune a qualquer tipo de curvatura", correct: false },
            { text: "Servem apenas para identificar as fibras através de cores diferentes nos tubos", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a aplicação principal do cabo óptico Speed Star ASU80 / ASU120?",
        answers: [
            { text: "Instalações aéreas externas auto-sustentadas em vãos de até 80 m e 120 m", correct: true },
            { text: "Instalações subterrâneas diretamente enterradas sem dutos diretamente no chão", correct: false },
            { text: "Distribuição interna em edifícios e data centers", correct: false },
            { text: "Interligação submarina de curta distância", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "O que diferencia tecnicamente o modelo ASU80 do ASU120 na linha Speed Star?",
        answers: [
            { text: "O comprimento máximo do vão aéreo suportado e a resistência mecânica associada", correct: true },
            { text: "O tipo de fibra óptica utilizada, sendo uma monomodo e a outra multimodo", correct: false },
            { text: "A presença de blindagem metálica apenas no modelo ASU120", correct: false },
            { text: "A quantidade de fibras, que é fixa em 80 e 120 fibras respectivamente", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a configuração estrutural e a função das 'loose tubes' no cabo Speed Star ASU?",
        answers: [
            { text: "Dielétrico auto-sustentado com tubo único que protege as fibras contra flexões e esmagamento", correct: true },
            { text: "Metálico com mensageiro externo onde o tubo serve apenas para identificação e controle de informações", correct: false },
            { text: "Drop flat onde as loose tubes atuam como elemento principal de tração", correct: false },
            { text: "Núcleo compacto onde o tubo loose realiza o aterramento elétrico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual material compõe a capa externa e por que a proteção UV é indispensável?",
        answers: [
            { text: "Polietileno (PE) de alto revestimento; essencial para resistir à exposição solar contínua em ambientes externos", correct: true },
            { text: "PVC retardante à chama; essencial para evitar a propagação de incêndios em postes", correct: false },
            { text: "Polímero LSZH; essencial para reduzir a emissão de fumaça em instalações aéreas", correct: false },
            { text: "Elastômero metálico; essencial para evitar a penetração de umidade por capilaridade", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual material é utilizado como elemento central de força e qual sua principal função?",
        answers: [
            { text: "FRP (Fiber Reinforced Plastic); absorve esforços mecânicos e previne contrações longitudinais", correct: true },
            { text: "Aço galvanizado; garante a sustentação e o aterramento da rede pra maior segurança na questão elétrica", correct: false },
            { text: "Cobre eletrolítico; reduz a atenuação do sinal óptico", correct: false },
            { text: "Aramida trançada; facilita a emenda em caixas de terminação óptica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a função da geléia e do fio de rasgamento (rip cord) na instalação do cabo?",
        answers: [
            { text: "A geléia protege contra umidade/microcurvaturas e o rip cord facilita a abertura da capa externa", correct: true },
            { text: "A geléia aumenta a rigidez estrutural e o rip cord serve como elemento de tração adicional", correct: false },
            { text: "A geléia isola eletricamente o núcleo e o rip cord identifica a sequência das fibras", correct: false },
            { text: "Ambos servem exclusivamente para reduzir a carga de compressão aplicada ao cabo no poste", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual tipo de fibra e revestimento primário são aplicados no cabo Speed Star ASU?",
        answers: [
            { text: "Fibra monomodo ITU-T G.652 D com revestimento em acrilato curado com UV", correct: true },
            { text: "Fibra monomodo G.657 A2 com revestimento cerâmico com resistência a alto impacto", correct: false },
            { text: "Fibra multimodo OM4 com revestimento de polietileno", correct: false },
            { text: "Fibra monomodo G.655 com camada metálica anticorrosiva", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a faixa de quantidade de fibras e como elas são identificadas?",
        answers: [
            { text: "De 1 até 144 fibras, identificadas por código de cores conforme normas ANATEL", correct: true },
            { text: "Sempre 12 fibras, identificadas por numeração gravada a laser", correct: false },
            { text: "De 2 até 48 fibras, identificadas por anéis metálicos no tubo", correct: false },
            { text: "Quantidade fixa definida por projeto, identificada por etiquetas RFID", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é o diâmetro externo nominal aproximado do cabo ASU120 de tubo único?",
        answers: [
            { text: "9,0 mm ± 0,2 mm", correct: true },
            { text: "7,0 mm ± 0,3 mm", correct: false },
            { text: "11,5 mm ± 0,5 mm", correct: false },
            { text: "14,0 mm ± 0,2 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Quais são as regras para o raio mínimo de curvatura deste cabo?",
        answers: [
            { text: "20 vezes o diâmetro externo durante a instalação e 10 vezes após a instalação", correct: true },
            { text: "15 vezes o diâmetro externo em qualquer situação", correct: false },
            { text: "Um raio fixo de 30 mm durante a instalação e 25 mm após o cabo devidamente instalado", correct: false },
            { text: "10 vezes o diâmetro durante a instalação e 5 vezes após a instalação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual é a faixa de temperatura de operação especificada para este produto?",
        answers: [
            { text: "-20 °C a +65 °C", correct: true },
            { text: "0 °C a +50 °C", correct: false },
            { text: "-10 °C a +70 °C", correct: false },
            { text: "-40 °C a +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Qual regulamentação nacional certifica a conformidade do cabo Speed Star ASU?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Normas para condutores elétricos", correct: false },
            { text: "ISO 11801 – Sistemas de cabeamento genérico", correct: false },
            { text: "IEC 60794 – Padrão internacional para cabos ópticos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.ASU80 / ASU120 – Cabo Óptico Speed Star ASU – Tubo Único – Auto-Sustentável",
        question: "Por que o design 'ASU' (tubo único) é vantajoso em relação aos cabos 'Loose Tube' tradicionais em redes de acesso?",
        answers: [
            { text: "Oferece um diâmetro reduzido e menor carga de vento, facilitando o compartilhamento de postes", correct: true },
            { text: "Permite a transmissão de dados em distâncias maiores sem repetidores", correct: false },
            { text: "Garante que o cabo seja imune a qualquer tipo de curvatura durante o lançamento", correct: false },
            { text: "Elimina totalmente a necessidade de fusão por calor (splice-on)", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a principal aplicação do cabo óptico Speed Star Drop Figura 8?",
        answers: [
            { text: "Atendimento FTTH, interligando a última caixa de emenda aérea até o assinante", correct: true },
            { text: "Backbone óptico de longa distância, utilizado para a interligação entre centrais de comunicação", correct: false },
            { text: "Interligação interna de racks em data centers", correct: false },
            { text: "Instalações submarinas de curta distância", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "O que caracteriza o formato 'Figura 8' e qual o material do seu elemento de sustentação?",
        answers: [
            { text: "A presença de um fio de aço galvanizado (1,3 mm) integrado ao corpo do cabo para sustentação aérea", correct: true },
            { text: "A utilização de dois tubos ópticos paralelos unidos por uma blindagem dielétrica", correct: false },
            { text: "O uso de fios de aramida dispostos em formato de oito para maior tração interna", correct: false },
            { text: "A separação física entre as fibras monomodo e multimodo dentro de dois tubos distintos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é o material da capa externa e o que significa a classificação COG?",
        answers: [
            { text: "Material termoplástico resistente a UV; COG indica que é um revestimento não propagante à chama", correct: true },
            { text: "PVC flexível retardante à chama; COG indica que o cabo possui isolamento galvânico", correct: false },
            { text: "LSZH (baixa fumaça); COG indica condutividade óptica garantida para longas distâncias", correct: false },
            { text: "Polietileno de alta densidade; COG indica classe de blindagem metálica contra roedores", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a função do elemento de tração em aramida e do fio de rasgamento (rip cord)?",
        answers: [
            { text: "A aramida absorve esforços mecânicos internos e o rip cord facilita a abertura controlada da capa", correct: true },
            { text: "A aramida substitui o mensageiro de aço e o rip cord serve para guiar as emendas ópticas", correct: false },
            { text: "Ambos servem para reforçar a estrutura aérea e reduzir a flecha do cabo entre postes", correct: false },
            { text: "A aramida atua na proteção contra interferências, enquanto o rip cord contribui para o aumento da rigidez do tubo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a função técnica do loose tube e da geléia interna no cabo Figura 8?",
        answers: [
            { text: "Proteger as fibras contra umidade, microcurvaturas, esmagamento e variações térmicas", correct: true },
            { text: "Atuar como elemento principal de sustentação aérea para vãos de até 80 metros", correct: false },
            { text: "Fixar permanentemente as fibras no centro do cabo para evitar movimentações", correct: false },
            { text: "Eliminar a necessidade de elementos de tração dielétricos como a aramida", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Quais tipos de fibras são utilizados e qual a vantagem da fibra ITU-T G.657 A1?",
        answers: [
            { text: "Monomodo G.657 A1 e G.652 D; a G.657 A1 oferece baixa sensibilidade à curvatura", correct: true },
            { text: "Somente multimodo OM3; permite maior diâmetro de núcleo para curtas distâncias", correct: false },
            { text: "Fibra monomodo G.655; indicada exclusivamente para ambientes submarinos", correct: false },
            { text: "Híbrida monomodo/multimodo, garantindo compatibilidade com sistemas legados de cobre", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a capacidade de fibras e as dimensões nominais aproximadas do cabo?",
        answers: [
            { text: "De 1 até 12 fibras; dimensões de aproximadamente 5,0 mm x 9,4 mm", correct: true },
            { text: "De 12 até 144 fibras; dimensões de aproximadamente 7,0 mm x 14,0 mm", correct: false },
            { text: "Quantidade fixa de 24 fibras; dimensões de aproximadamente 4,0 mm x 6,0 mm", correct: false },
            { text: "Somente 1 fibra óptica; dimensões de aproximadamente 10,0 mm x 10,0 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é o vão máximo e a flecha (curvatura do cabo suspenso) recomendada para a instalação aérea deste cabo?",
        answers: [
            { text: "Vão máximo de 80 metros com flecha recomendada de 1% do vão", correct: true },
            { text: "Vão máximo de 120 metros com flecha recomendada de 2% do vão", correct: false },
            { text: "Vão máximo de 60 metros com flecha recomendada de 0,5% do vão", correct: false },
            { text: "Vão máximo de 200 metros sem limite de flecha definido", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Quais são os raios mínimos de curvatura permitidos para o cabo Figura 8?",
        answers: [
            { text: "150 mm durante a instalação e 75 mm após a instalação (permanente)", correct: true },
            { text: "75 mm durante a instalação e 150 mm após a instalação", correct: false },
            { text: "100 mm em ambas as situações para evitar atenuação excessiva", correct: false },
            { text: "50 mm após a instalação para facilitar a entrada em caixas de assinante", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual é a faixa de temperatura de operação suportada por este cabo?",
        answers: [
            { text: "-20 °C até +65 °C", correct: true },
            { text: "0 °C até +50 °C", correct: false },
            { text: "-10 °C até +70 °C", correct: false },
            { text: "-40 °C até +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual norma brasileira e qual órgão certificam este cabo para o mercado nacional?",
        answers: [
            { text: "Norma NBR 15596 e certificação ANATEL (Anexo A da Resolução 299)", correct: true },
            { text: "Norma NBR 5410 e certificação INMETRO para segurança elétrica", correct: false },
            { text: "Norma NBR 14160 e certificação ISO 9001 para processos industriais", correct: false },
            { text: "Norma IEC 60794 e certificação para cabos submarinos ópticos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Por que o uso de material termoplástico resistente a UV é crítico na capa deste cabo?",
        answers: [
            { text: "Para evitar a degradação precoce e o ressecamento da capa exposta diretamente ao sol em vãos aéreos", correct: true },
            { text: "Para aumentar a velocidade de transmissão de dados em dias ensolarados", correct: false },
            { text: "Para permitir que o cabo seja instalado próximo a redes elétricas de alta tensão", correct: false },
            { text: "Para reduzir o peso total do cabo e facilitar a fixação em grampos de assinante", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Qual a vantagem do baixo atrito superficial mencionado no datasheet do produto?",
        answers: [
            { text: "Facilita o manuseio, lançamento e a passagem por dutos ou roldanas sem danificar a capa", correct: true },
            { text: "Impede que aves pousem no cabo em instalações externas", correct: false },
            { text: "Garante que o cabo não escorregue dos grampos de fixação tipo cunha", correct: false },
            { text: "Permite que a fibra óptica interna deslize melhor para compensar dilatações térmicas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Em redes FTTH, por que este cabo é preferível ao drop flat interno em trechos aéreos de até 80m?",
        answers: [
            { text: "Devido ao elemento de sustentação em aço, que suporta a tração e o peso próprio sem estressar as fibras", correct: true },
            { text: "Porque o drop Figura 8 é mais leve e fácil de prender com fita isolante", correct: false },
            { text: "Porque permite maior número de fusões em uma única caixa de emenda", correct: false },
            { text: "Porque é imune a interferências de rádio e Wi-Fi, assegurando desempenho estável mesmo em ambientes urbanos com alta densidade de sinais", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FIG8 – Cabo Óptico Speed Star Drop Figura 8 – Tubo Único – FTTH",
        question: "Como os filamentos de aramida contribuem para a performance mecânica do cabo?",
        answers: [
            { text: "Eles atuam como elementos de tração flexíveis que protegem as fibras contra estiramento", correct: true },
            { text: "Eles servem para aumentar o diâmetro do cabo e torná-lo mais visível nos postes", correct: false },
            { text: "Eles funcionam como um condutor elétrico para aterramento de segurança", correct: false },
            { text: "Eles são responsáveis por repelir a umidade através de capilaridade reversa", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é a principal aplicação do cabo óptico Speed Star Mini Flat Drop Opti Ray?",
        answers: [
            { text: "Redes FTTH para atendimento final ao assinante em instalações internas e externas", correct: true },
            { text: "Backbones ópticos metropolitanos de longa distância", correct: false },
            { text: "Interligação de racks em data centers", correct: false },
            { text: "Redes submarinas de curta distância", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Por que o cabo Opti Ray é ideal para ambientes com espaço limitado e curvas acentuadas?",
        answers: [
            { text: "Pelo formato compacto Mini Flat associado à fibra G.657 A2 de baixa sensibilidade à curvatura", correct: true },
            { text: "Porque sua estrutura plana permite dobras em ângulos retos de até 90° sem proteção", correct: false },
            { text: "Devido ao uso de fibras multimodo que possuem maior diâmetro de núcleo", correct: false },
            { text: "Porque dispensa o uso de elementos de tração, tornando o cabo extremamente maleável", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "O que diferencia a construção 'Arame Colado' do Opti Ray de um Mini Flat Drop convencional?",
        answers: [
            { text: "Elementos metálicos de tração e sustentação revestidos e colados integralmente ao corpo do cabo", correct: true },
            { text: "A substituição de fios metálicos por uma blindagem de polímero condutivo", correct: false },
            { text: "A ausência de mensageiro externo, utilizando apenas fibras de aramida internas", correct: false },
            { text: "A utilização de um núcleo óptico oval com blindagem metálica corrugada, proporcionando maior proteção mecânica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é a composição da capa externa e qual seu benefício?",
        answers: [
            { text: "Termoplástico LSZH; garante baixa emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "Polietileno de alta densidade; garante isolamento elétrico contra descargas atmosféricas", correct: false },
            { text: "PVC flexível; garante maior resistência ao atrito durante a passagem em dutos", correct: false },
            { text: "Elastômero termoplástico; garante proteção total contra roedores e umidade", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Quais são as configurações de fibras disponíveis e qual o modelo da fibra monomodo utilizada?",
        answers: [
            { text: "01 ou 02 fibras monomodo ITU-T G.657 A2", correct: true },
            { text: "Até 12 fibras monomodo ITU-T G.652 D", correct: false },
            { text: "04 fibras multimodo OM3 para redes corporativas", correct: false },
            { text: "Configuração fixa de 01 fibra monomodo e 01 fibra multimodo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Quais são as dimensões externas e o peso nominal aproximado deste cabo de 1km?",
        answers: [
            { text: "5,2 mm x 2,0 mm com peso de cerca de 20 kg/km", correct: true },
            { text: "4,0 mm x 1,6 mm com peso de cerca de 45 kg/km", correct: false },
            { text: "6,5 mm x 3,0 mm com peso de cerca de 80 kg/km", correct: false },
            { text: "8,0 mm x 4,0 mm com peso de cerca de 120 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Quais são os raios mínimos de curvatura para o cabo Opti Ray?",
        answers: [
            { text: "30 mm durante a instalação e 15 mm após a instalação", correct: true },
            { text: "15 mm durante a instalação e 30 mm após a instalação", correct: false },
            { text: "60 mm durante a instalação e 20 mm após a instalação", correct: false },
            { text: "Fixo em 30 mm para ambas as situações", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é o desempenho mecânico (vão máximo e tensão) para instalação aérea?",
        answers: [
            { text: "Vão de até 80 metros e máxima tensão de instalação de 660 N", correct: true },
            { text: "Vão de até 120 metros e máxima tensão de instalação de 1000 N", correct: false },
            { text: "Vão de até 60 metros e máxima tensão de instalação de 500 N", correct: false },
            { text: "Sem limitação de vão com tensão máxima de 100 N", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual é a faixa de temperatura de operação especificada para o cabo?",
        answers: [
            { text: "-20 °C até +65 °C", correct: true },
            { text: "0 °C até +50 °C", correct: false },
            { text: "-10 °C até +70 °C", correct: false },
            { text: "-40 °C até +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Quais as formas e comprimentos padrão de fornecimento logístico?",
        answers: [
            { text: "Carretéis de 1km ou 2km", correct: true },
            { text: "Somente bobinas de madeira de 3000m", correct: false },
            { text: "Rolos plásticos de 100m ensacados a vácuo", correct: false },
            { text: "Carretéis metálicos industriais de 10km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual certificação brasileira garante a qualidade e conformidade deste produto?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Requisitos para condutores de eletricidade", correct: false },
            { text: "ISO 9001 – Gestão de qualidade industrial", correct: false },
            { text: "IEC 61300 – Testes de interconexão de fibra óptica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Por que os elementos metálicos colados são fundamentais para o desempenho aéreo do Opti Ray?",
        answers: [
            { text: "Eles conferem a rigidez e sustentação necessárias para manter a integridade das fibras sob vento e peso próprio", correct: true },
            { text: "Eles servem para conduzir energia até a ONU do cliente em casos de emergência", correct: false },
            { text: "Eles funcionam como blindagem contra interferências de redes Wi-Fi vizinhas", correct: false },
            { text: "Eles permitem que o cabo seja facilmente detectado por sensores de metal no solo, facilitando sua localização e manutenção", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Em caso de instalação interna, qual a principal vantagem do design Mini Flat?",
        answers: [
            { text: "Permite uma instalação discreta e estética ao longo de rodapés ou cantos de parede", correct: true },
            { text: "Dispensa o uso de canaletas ou dutos de proteção devido à sua blindagem metálica", correct: false },
            { text: "Facilita a identificação imediata do cabo por técnicos de telefonia móvel", correct: false },
            { text: "Permite que o cabo seja pintado com qualquer tipo de tinta sem perda de sinal", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Como o arame de sustentação deve ser tratado no momento da entrada na residência do assinante?",
        answers: [
            { text: "Ele deve ser destacado do corpo do cabo (drop) e finalizado no ponto de ancoragem externo", correct: true },
            { text: "Ele deve entrar junto com o cabo até a roseta interna para garantir tração", correct: false },
            { text: "Ele deve ser aterrado obrigatoriamente na carcaça da ONU/ONT para evitar interferências elétricas", correct: false },
            { text: "Ele deve ser enrolado em volta do cabo óptico para reforçar a entrada no conduíte", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.OPTIRAY – Cabo Óptico Speed Star Mini Flat Drop Opti Ray – Arame Colado – FTTH",
        question: "Qual a vantagem técnica do design 'Arame Colado' em relação aos cabos drop com mensageiro separado?",
        answers: [
            { text: "Proporciona maior estabilidade estrutural, impedindo o deslizamento do núcleo óptico em relação aos elementos de tração e facilitando a ancoragem", correct: true },
            { text: "Permite que o cabo conduza eletricidade para alimentar equipamentos ativos na residência do assinante, integrando transmissão de dados e fornecimento de energia", correct: false },
            { text: "Torna o cabo totalmente imune a raios, eliminando a necessidade de qualquer elemento dielétrico", correct: false },
            { text: "Aumenta a largura de banda da fibra óptica devido à blindagem metálica colada", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é a principal aplicação do cabo óptico Speed Star Mini Flat Drop Compacto?",
        answers: [
            { text: "Atendimento FTTH em instalações internas, conectando a caixa óptica ao assinante", correct: true },
            { text: "Backbone óptico externo para longas distâncias metropolitanas com grande movimentação", correct: false },
            { text: "Interligação de racks em data centers com alta densidade de fibras", correct: false },
            { text: "Instalações subterrâneas diretamente enterradas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Por que o cabo Mini Flat Drop Compacto é indicado para ambientes internos com espaço limitado?",
        answers: [
            { text: "Devido às suas dimensões reduzidas (3,0 x 2,0 mm) e uso de fibra G.657 A2 com baixa sensibilidade à curvatura", correct: true },
            { text: "Porque sua estrutura plana permite dobras em ângulos retos de até 90° sem proteção e melhora as condições de instalação", correct: false },
            { text: "Porque possui blindagem metálica espessa contra esmagamento em dutos", correct: false },
            { text: "Porque utiliza fibras multimodo que dispensam raio mínimo de curvatura", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual vantagem prática o formato Mini Flat Drop Compacto oferece ao instalador em redes prediais?",
        answers: [
            { text: "Facilidade de manuseio e melhor acabamento estético em canaletas, rodapés e dutos internos", correct: true },
            { text: "Maior resistência à tração para vãos aéreos externos de até 80 metros", correct: false },
            { text: "Capacidade de suportar enterramento direto em jardins e áreas externas, auxiliando no benefício visual", correct: false },
            { text: "Dispensa totalmente o uso de elementos metálicos de tração interna", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é a composição da capa externa e qual a principal função de sua tecnologia?",
        answers: [
            { text: "Termoplástico LSZH; reduz a emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "PVC flexível; aumenta a resistência elétrica do cabo contra curtos-circuitos", correct: false },
            { text: "Polietileno de alta densidade; melhora a atenuação óptica da fibra em ambientes frios", correct: false },
            { text: "Elastômero metálico; permite o enterramento direto do cabo em solo úmido", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual material é utilizado como elemento de tração e qual sua função principal?",
        answers: [
            { text: "Filamentos metálicos; absorvem esforços mecânicos durante o lançamento e manuseio interno", correct: true },
            { text: "Fibras de aramida; servem como mensageiro para vãos aéreos longos", correct: false },
            { text: "Aço galvanizado externo; atua como blindagem eletromagnética contra cabos elétricos", correct: false },
            { text: "Cobre estanhado; substitui a necessidade de rip cord na abertura da capa", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual tipo de fibra óptica é utilizado e qual sua característica essencial?",
        answers: [
            { text: "Fibra monomodo BLI A/B (G.657 A2); essencial pela baixa sensibilidade à curvatura", correct: true },
            { text: "Fibra monomodo G.652 D; essencial para backbone de longa distância", correct: false },
            { text: "Fibra multimodo OM3; essencial para redes corporativas de 10Gbps", correct: false },
            { text: "Fibra híbrida; essencial para compatibilidade com equipamentos multimodo legados com muito tempo de uso", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Quais são as configurações de fibras e o peso líquido aproximado por quilômetro?",
        answers: [
            { text: "01 ou 02 fibras ópticas monomodo; peso aproximado de 7,8 kg/km", correct: true },
            { text: "Até 12 fibras ópticas; peso aproximado de 15 kg/km", correct: false },
            { text: "Quantidade fixa de 04 fibras; peso aproximado de 22 kg/km", correct: false },
            { text: "Acima de 24 fibras; peso aproximado de 40 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Quais são os raios mínimos de curvatura permitidos para este cabo?",
        answers: [
            { text: "30 mm durante a instalação e 15 mm após a instalação", correct: true },
            { text: "15 mm durante a instalação e 30 mm após a instalação", correct: false },
            { text: "60 mm durante a instalação e 20 mm após a instalação", correct: false },
            { text: "Fixo em 10 vezes o diâmetro do cabo em qualquer situação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual é a faixa de temperatura de operação do cabo Mini Flat Drop Compacto?",
        answers: [
            { text: "-20 °C até +65 °C", correct: true },
            { text: "0 °C até +50 °C", correct: false },
            { text: "-10 °C até +70 °C", correct: false },
            { text: "-40 °C até +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Como é realizada a marcação e identificação da capa externa deste cabo?",
        answers: [
            { text: "Gravação métrica sequencial (1m) contendo produto, norma, lote e ano", correct: true },
            { text: "Etiqueta adesiva aplicada apenas nas extremidades do carretel", correct: false },
            { text: "Gravação a laser exclusivamente em intervalos de 10 metros", correct: false },
            { text: "Identificação por código de cores sem marcação textual", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Quais são os comprimentos padrão de fornecimento deste cabo?",
        answers: [
            { text: "1000 m ou 2000 m em carretel", correct: true },
            { text: "Somente bobinas de 3000 m", correct: false },
            { text: "Rolos flexíveis de 100 m", correct: false },
            { text: "Carretéis metálicos de 10 km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Qual órgão certifica o cabo Speed Star Mini Flat Drop Compacto para uso no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Requisitos para condutores de eletricidade", correct: false },
            { text: "ISO 11801 – Cabeamento estruturado", correct: false },
            { text: "IEC 60793 – Fibras ópticas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "Por que não se deve utilizar este cabo específico (Compacto Indoor) em vãos aéreos externos?",
        answers: [
            { text: "Porque ele não possui mensageiro metálico externo para suportar tração contínua e carga de vento", correct: true },
            { text: "Porque a fibra G.657 A2 só funciona dentro de edifícios", correct: false },
            { text: "Porque a capa LSZH derrete quando exposta diretamente ao raios solares de alta intensidade por mais de 2 horas", correct: false },
            { text: "Porque sua atenuação aumenta drasticamente em ambientes abertos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.1F.DROP.COMPACTO – Cabo Óptico Speed Star Mini Flat Drop Compacto – 1 km – Uso Interno (Indoor)",
        question: "O que garante que o cabo Mini Flat Drop Compacto seja esteticamente superior em instalações residenciais?",
        answers: [
            { text: "Suas dimensões compactas e perfil plano, que permitem uma fixação discreta e menor impacto visual", correct: true },
            { text: "O brilho metálico da sua capa externa que reflete a luz ambiente", correct: false },
            { text: "O fato de ser fornecido apenas na cor branca fosca", correct: false },
            { text: "Sua capacidade de ser dobrado em nós sem perder o sinal óptico", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o principal diferencial logístico e operacional do Cabo Speed Star Mini Flat Drop – versão Inovação?",
        answers: [
            { text: "Integração do carretel com o desbobinador, facilitando transporte, manuseio e lançamento do cabo em campo", correct: true },
            { text: "Uso de blindagem metálica contínua para instalação em ambientes industriais severos em ambientes insalubres", correct: false },
            { text: "Eliminação total da necessidade de respeitar um raio mínimo de curvatura", correct: false },
            { text: "Capacidade de transmitir sinal óptico e energia elétrica simultaneamente", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Para quais cenários de instalação o Mini Flat Drop Inovação é indicado?",
        answers: [
            { text: "Redes FTTH internas e externas, inclusive vias aéreas com vãos de até 80 m", correct: true },
            { text: "Backbones ópticos de longa distância entre centrais metropolitanas", correct: false },
            { text: "Interligação exclusiva de racks em data centers de alta densidade", correct: false },
            { text: "Aplicações submarinas de curta distância e travessias fluviais", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "O que caracteriza o formato Mini Flat e qual vantagem prática ele oferece ao instalador?",
        answers: [
            { text: "Perfil plano e compacto que facilita a instalação em espaços limitados com melhor acabamento estético", correct: true },
            { text: "Estrutura circular com múltiplos tubos loose que aumenta a capacidade de fibras", correct: false },
            { text: "Perfil oval que permite o enterramento direto sem a necessidade de dutos de proteção", correct: false },
            { text: "Dois cabos independentes unidos que dispensam o uso de caixas de atendimento (CTO)", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o material da capa externa e qual a vantagem de sua tecnologia?",
        answers: [
            { text: "Material termoplástico LSZH resistente a UV; garante baixa emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "PVC flexível de uso interno; garante maior condutividade elétrica para o sistema", correct: false },
            { text: "Polietileno de alta densidade; focado em reduzir drasticamente a atenuação óptica", correct: false },
            { text: "Elastômero metálico; elimina a necessidade de aterramento nos postes", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Quais elementos estruturais garantem a resistência mecânica e a auto-sustentação deste cabo?",
        answers: [
            { text: "Filamentos metálicos para tração e um elemento metálico dedicado para vãos de até 80 m", correct: true },
            { text: "Fibras de aramida dielétricas dispostas em espiral ao redor do núcleo garantindo eficiência", correct: false },
            { text: "Uma blindagem metálica corrugada externa que substitui o mensageiro", correct: false },
            { text: "Uso de geléia hidrofóbica sólida que atua como elemento de tração", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Por que a fibra ITU-T G.657 A1 é utilizada nesta versão do cabo?",
        answers: [
            { text: "Porque permite raios de curvatura menores sem aumento significativo de atenuação, ideal para ambientes internos", correct: true },
            { text: "Porque possui um núcleo maior, facilitando a fusão com equipamentos multimodo", correct: false },
            { text: "Porque é a única fibra que suporta exposição direta a raios ultravioleta (UV)", correct: false },
            { text: "Porque garante que o sinal percorra distâncias superiores a 100 km sem repetidores", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é o peso nominal aproximado do cabo por quilômetro?",
        answers: [
            { text: "Cerca de 20 kg/km", correct: true },
            { text: "Cerca de 7,8 kg/km", correct: false },
            { text: "Cerca de 45 kg/km", correct: false },
            { text: "Cerca de 80 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Quais são os raios mínimos de curvatura permitidos para o cabo Inovação?",
        answers: [
            { text: "30 mm durante a instalação e 15 mm após a instalação", correct: true },
            { text: "15 mm durante a instalação e 30 mm após a instalação", correct: false },
            { text: "60 mm durante a instalação e 20 mm após a instalação", correct: false },
            { text: "Fixo em 10 vezes o diâmetro do cabo em qualquer situação", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual é a faixa de temperatura de operação do cabo?",
        answers: [
            { text: "-20 °C a +65 °C", correct: true },
            { text: "0 °C a +50 °C", correct: false },
            { text: "-10 °C a +70 °C", correct: false },
            { text: "-40 °C a +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Como é realizada a marcação na capa externa e qual o comprimento padrão de fornecimento?",
        answers: [
            { text: "Gravação métrica a cada 1m; fornecido em carretéis integrados de 1000m", correct: true },
            { text: "Etiqueta adesiva a cada 10m; fornecido em bobinas de madeira de 3000m", correct: false },
            { text: "Marcação eletrônica RFID; fornecido em rolos flexíveis de 100m", correct: false },
            { text: "Marcação manual nas extremidades; fornecido em carretéis metálicos de 10km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "Qual órgão certifica este cabo para o mercado brasileiro?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Normas para condutores elétricos", correct: false },
            { text: "ISO – Sistema de gestão de qualidade predial", correct: false },
            { text: "IEC – Requisitos para cabos submarinos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "De que forma o desbobinador integrado impacta a produtividade das equipes de campo?",
        answers: [
            { text: "Reduz o tempo de setup, evita o emaranhamento do cabo e dispensa suportes de desbobinamento externos", correct: true },
            { text: "Aumenta a velocidade de fusão das fibras ópticas através de um guia embutido", correct: false },
            { text: "Permite que o cabo seja lançado automaticamente por drones de instalação com alta tecnologia apurada", correct: false },
            { text: "Garante que o cabo seja cortado automaticamente ao atingir o final da caixa de assinante", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF.FLAT.INOVAÇÃO – Cabo Óptico Speed Star Mini Flat Drop – Carretel + Desbobinador Integrados (Inovação)",
        question: "O elemento metálico de sustentação pode ser destacado do núcleo óptico?",
        answers: [
            { text: "Sim, ele deve ser separado na ancoragem externa, permitindo que apenas o núcleo óptico entre na residência do assinante", correct: true },
            { text: "Não, ele deve permanecer unido para garantir que o sinal óptico não sofra interferência eletromagnética", correct: false },
            { text: "Sim, mas apenas se o técnico utilizar uma ferramenta de corte a laser específica", correct: false },
            { text: "Não, pois o elemento de sustentação também funciona como um guia para a luz da fibra", correct: false }
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
        question: "Por que este cabo é classificado como autossustentado e qual sua vantagem prática?",
        answers: [
            { text: "Possui elemento metálico de sustentação dedicado, permitindo a instalação em vãos aéreos sem cabos guia", correct: true },
            { text: "Dispensa o uso de ancoragens e alças preformadas devido à sua leveza extrema, muito prático em sua aplicação", correct: false },
            { text: "Utiliza apenas elementos dielétricos que repelem a necessidade de aterramento", correct: false },
            { text: "Sua estrutura permite que o cabo flutue em dutos alagados sem sofrer tração", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "O que caracteriza o formato Mini Flat Drop e como ele beneficia o instalador?",
        answers: [
            { text: "Perfil plano e compacto que facilita a passagem e oferece melhor acabamento estético com menor impacto visual", correct: true },
            { text: "Estrutura circular com múltiplos tubos loose para aumentar a densidade de fibras", correct: false },
            { text: "Perfil oval projetado especificamente para enterramento direto sem proteção de dutos", correct: false },
            { text: "Dois cabos ópticos independentes que permitem atender dois assinantes com um único lançamento", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é o material da capa externa e qual o benefício de sua tecnologia?",
        answers: [
            { text: "Termoplástico LSZH; garante baixa emissão de fumaça e gases tóxicos em caso de incêndio", correct: true },
            { text: "PVC flexível; permite uma maior condutividade elétrica para o sistema de sinalização", correct: false },
            { text: "Polietileno de alta densidade; focado na redução da atenuação óptica em climas árticos", correct: false },
            { text: "Elastômero metálico; dispensa a necessidade de proteção contra raios ultravioleta (UV)", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Diferencie a função dos filamentos metálicos de tração do elemento metálico de sustentação:",
        answers: [
            { text: "Os filamentos de tração absorvem esforços de manuseio e lançamento; o elemento de sustentação suporta o cabo em vãos aéreos", correct: true },
            { text: "Os de tração servem para aterramento; o de sustentação serve para aumentar a largura de banda", correct: false },
            { text: "Ambos possuem a mesma função, sendo apenas uma redundância para evitar o rompimento do cabo", correct: false },
            { text: "O elemento de sustentação é dielétrico, enquanto os elementos de tração são metálicos, proporcionando proteção adicional contra a ação de roedores", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual tipo de fibra óptica é utilizado e por que sua característica é essencial?",
        answers: [
            { text: "Fibra monomodo G.657 A2; essencial por sua baixa sensibilidade à curvatura em instalações compactas", correct: true },
            { text: "Fibra monomodo G.652 D; essencial para suportar enlaces metropolitanos de longa distância", correct: false },
            { text: "Fibra multimodo OM3; essencial para garantir compatibilidade com roteadores Wi-Fi antigos", correct: false },
            { text: "Fibra híbrida; essencial para converter automaticamente sinais analógicos em digitais", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é o peso líquido aproximado do cabo por quilômetro?",
        answers: [
            { text: "18 kg/km ± 1,5 kg", correct: true },
            { text: "7,8 kg/km", correct: false },
            { text: "25 kg/km", correct: false },
            { text: "40 kg/km", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Quais são os raios mínimos de curvatura permitidos durante e após a instalação?",
        answers: [
            { text: "30 mm durante a instalação e 15 mm após a instalação", correct: true },
            { text: "15 mm durante a instalação e 30 mm após a instalação", correct: false },
            { text: "60 mm durante a instalação e 20 mm após a instalação", correct: false },
            { text: "30 mm em ambas as situações para evitar quebra da fibra", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual é a faixa de temperatura de operação especificada para este produto?",
        answers: [
            { text: "-20 °C até +65 °C", correct: true },
            { text: "0 °C até +50 °C", correct: false },
            { text: "-10 °C até +70 °C", correct: false },
            { text: "-40 °C até +85 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Qual órgão certifica este cabo para comercialização no Brasil?",
        answers: [
            { text: "ANATEL – Anexo A da Resolução 299", correct: true },
            { text: "INMETRO – Normas para condutores de potência", correct: false },
            { text: "ISO – Sistema de gestão da qualidade", correct: false },
            { text: "IEC – Cabos ópticos submarinos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "O elemento de sustentação metálico deve entrar na casa do cliente?",
        answers: [
            { text: "Não, ele deve ser destacado e finalizado na ancoragem externa para evitar riscos elétricos e facilitar o manuseio interno", correct: true },
            { text: "Sim, ele ajuda a manter o cabo esticado dentro dos conduítes internos da residência", correct: false },
            { text: "Sim, pois ele atua como fio terra para os equipamentos de rede do assinante, garantindo segurança elétrica e correto funcionamento do sistema", correct: false },
            { text: "Não, ele deve ser soldado ao poste para garantir a sustentação eterna da rede", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FCB.XF – Cabo Óptico Speed Star Mini Flat Drop com Reforço Metálico (Compacto Metálico) – Uso Interno/Externo – FTTH",
        question: "Por que a resistência a UV é importante para a capa deste cabo?",
        answers: [
            { text: "Para evitar a degradação precoce do material termoplástico quando exposto ao sol em instalações aéreas", correct: true },
            { text: "Para garantir que a luz da fibra não escape através da capa externa", correct: false },
            { text: "Para permitir que o cabo brilhe no escuro, facilitando a manutenção noturna", correct: false },
            { text: "Para aumentar a velocidade de transmissão de dados através da energia solar", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é a principal finalidade e aplicação do Conector Óptico Fast Crimp SC-UPC?",
        answers: [
            { text: "Realizar conectorizações rápidas e confiáveis em redes FTTH Single Mode, como em caixas de assinante e CTOs", correct: true },
            { text: "Executar emendas permanentes por fusão em cabos de backbone", correct: false },
            { text: "Converter sinais ópticos em sinais elétricos para roteadores", correct: false },
            { text: "Atuar exclusivamente como adaptador óptico, realizando a interface entre fibras monomodo e multimodo sem funções adicionais", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual característica visual e técnica define o polimento deste conector?",
        answers: [
            { text: "Cor azul no corpo do conector, indicando polimento UPC (Ultra Physical Contact)", correct: true },
            { text: "Cor verde no corpo do conector, indicando polimento APC (Angled Physical Contact)", correct: false },
            { text: "Cor preta, indicando polimento PC neutro para fibras multimodo", correct: false },
            { text: "Cor branca, indicando polimento SPC de alta densidade", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais tipos de fibra e cabos são compatíveis com o conector Fast Crimp SC-UPC?",
        answers: [
            { text: "Fibras Monomodo (G.652 D e G.657 A); cabos DROP compacto e cordões de 2 a 3 mm", correct: true },
            { text: "Fibras Multimodo OM3 e OM4; cabos loose tube de múltiplos tubos", correct: false },
            { text: "Fibras Monomodo G.655; cabos submarinos blindados", correct: false },
            { text: "Fibras Híbridas; cabos ADSS de grande diâmetro para longa distância", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o material do ferrolho (ferrule) e do corpo do conector?",
        answers: [
            { text: "Ferrolho de cerâmica de zircônia e corpo em material termoplástico de alta resistência", correct: true },
            { text: "Ferrolho de plástico de alta densidade e corpo em metal fundido, garantindo eficiência", correct: false },
            { text: "Ferrolho de aço inoxidável polido e corpo em policarbonato simples", correct: false },
            { text: "Ferrolho de alumínio anodizado e corpo em borracha elastomérica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais são os valores típicos e máximos de perda de inserção (Insertion Loss)?",
        answers: [
            { text: "Típica ≤ 0,25 dB e Máxima ≤ 0,5 dB", correct: true },
            { text: "Típica ≤ 0,75 dB e Máxima ≤ 1,0 dB", correct: false },
            { text: "Típica ≤ 0,10 dB e Máxima ≤ 0,3 dB", correct: false },
            { text: "Típica ≤ 0,5 dB e Máxima ≤ 0,75 dB", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais são as dimensões físicas aproximadas do conector?",
        answers: [
            { text: "8 mm (L) × 7 mm (A) × 58 mm (C)", correct: true },
            { text: "10 mm (L) × 10 mm (A) × 60 mm (C)", correct: false },
            { text: "6 mm (L) × 6 mm (A) × 45 mm (C)", correct: false },
            { text: "12 mm (L) × 8 mm (A) × 70 mm (C)", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual a faixa de temperatura de operação e armazenamento suportada?",
        answers: [
            { text: "Operação: -40 °C a +85 °C; Armazenamento: -50 °C a +90 °C", correct: true },
            { text: "Operação: 0 °C a +50 °C; Armazenamento: -20 °C a +60 °C", correct: false },
            { text: "Operação: -20 °C a +65 °C; Armazenamento: 0 °C a +50 °C", correct: false },
            { text: "Operação: -10 °C a +70 °C; Armazenamento: -10 °C a +70 °C", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quantas vezes o Conector Fast Crimp SC-UPC pode ser reutilizado?",
        answers: [
            { text: "Até 5 reutilizações, mantendo suas características de desempenho", correct: true },
            { text: "Apenas uma reutilização", correct: false },
            { text: "É um produto de uso único (não reutilizável)", correct: false },
            { text: "Reutilização ilimitada, desde que o ferrolho seja limpo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Para o processo de conectorização, qual o comprimento de decapagem da capa externa do cabo?",
        answers: [
            { text: "45 mm", correct: true },
            { text: "30 mm", correct: false },
            { text: "60 mm", correct: false },
            { text: "20 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o comprimento correto para remoção do acrilato da fibra após a decapagem da capa?",
        answers: [
            { text: "20 mm", correct: true },
            { text: "12 mm", correct: false },
            { text: "25 mm", correct: false },
            { text: "45 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o comprimento exato de clivagem da fibra para garantir o contato no interior do conector?",
        answers: [
            { text: "12 mm", correct: true },
            { text: "10 mm", correct: false },
            { text: "15 mm", correct: false },
            { text: "20 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais são os componentes básicos de travamento e corpo deste conector?",
        answers: [
            { text: "Rosca de travamento, corpo do conector e capa de proteção", correct: true },
            { text: "Ferrolho cerâmico, adaptador fêmea e sleeve de metal", correct: false },
            { text: "Núcleo óptico, blindagem corrugada e rip cord", correct: false },
            { text: "Trava de pressão lateral, ferrolho de plástico e mola interna", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Quais ferramentas são essenciais para a montagem deste conector em campo?",
        answers: [
            { text: "Clivador óptico, álcool isopropílico/lenço, decapador de cabo drop e decapador de fibra (miller)", correct: true },
            { text: "Máquina de fusão, clivador e forno de retração de tubetes", correct: false },
            { text: "Alicate universal, estilete e fita isolante", correct: false },
            { text: "Power Meter, OTDR e localizador visual de falhas (VFL) apenas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual órgão é responsável pela certificação deste produto para o mercado brasileiro?",
        answers: [
            { text: "ANATEL", correct: true },
            { text: "INMETRO", correct: false },
            { text: "ISO", correct: false },
            { text: "IEC", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "O que a 'rosca de travamento' diferencia este conector de modelos de trava por clique (push-pull)?",
        answers: [
            { text: "Proporciona uma fixação mecânica superior do cabo, evitando que ele se solte com vibrações ou puxões acidentais", correct: true },
            { text: "Permite que o conector transmita energia elétrica para a ONU do assinante", correct: false },
            { text: "Garante que o polimento UPC se transforme em APC automaticamente", correct: false },
            { text: "Aumenta a velocidade de clivagem da fibra em até 50%, otimizando o processo de preparação e reduzindo o tempo de execução das atividades", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-SC-UPC – Conector Óptico Fast Crimp ROSCA SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o impacto de uma clivagem incorreta neste conector?",
        answers: [
            { text: "Pode gerar um gap de ar (perda alta) ou impedir o fechamento da trava, quebrando a fibra", correct: true },
            { text: "Aumenta o raio de curvatura da fibra dentro do conector sem afetar o sinal", correct: false },
            { text: "Altera a cor do conector de azul para verde", correct: false },
            { text: "Nenhum, pois o conector possui uma mola de compensação para qualquer tamanho de fibra", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é a principal finalidade e ambiente de aplicação do Conector Óptico Fast Crimp CLICK SC-UPC?",
        answers: [
            { text: "Realizar conectorizações rápidas em redes FTTH Single Mode, em ambientes internos, caixas de assinantes ou caixas aéreas", correct: true },
            { text: "Executar emendas ópticas por fusão permanente em backbones metropolitanos", correct: false },
            { text: "Conectar redes submarinas e dutos alagados com proteção metálica", correct: false },
            { text: "Interligar cabos de backbone com múltiplas fibras, garantindo conexões confiáveis mesmo em ambientes externos severos", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é o principal diferencial e benefício prático da tecnologia Fast Crimp CLICK?",
        answers: [
            { text: "Sistema de travamento por clique que dispensa epóxi e polimento, reduzindo o tempo de instalação e padronizando o processo", correct: true },
            { text: "Uso obrigatório de máquina de fusão para garantir a fixação da fibra por soldagem térmica", correct: false },
            { text: "Eliminação total da necessidade de clivagem e limpeza da fibra antes da inserção, simplificando o processo de conexão e instalação", correct: false },
            { text: "Aumento da refletância óptica através de um sistema de polimento manual integrado", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual característica visual identifica este conector e seu respectivo polimento?",
        answers: [
            { text: "Cor azul no corpo ou na identificação, indicando polimento UPC (Ultra Physical Contact)", correct: true },
            { text: "Cor verde, indicando polimento SC-APC com ângulo de 8°", correct: false },
            { text: "Cor preta, indicando conector híbrido para fibras multimodo", correct: false },
            { text: "Cor amarela, indicando formato compacto LC-UPC", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Quais tipos de fibra óptica são compatíveis com o Conector Fast Crimp CLICK SC-UPC?",
        answers: [
            { text: "Fibras monomodo ITU-T G.652 D e ITU-T G.657 A", correct: true },
            { text: "Somente fibras multimodo OM3 e OM4", correct: false },
            { text: "Exclusivamente fibras G.655 para longa distância", correct: false },
            { text: "Fibras híbridas monomodo e multimodo simultaneamente", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Quais tipos de cabos ópticos são indicados para este conector?",
        answers: [
            { text: "Cabos Mini Flat DROP Speed Star e cordões ópticos de 2 a 3 mm", correct: true },
            { text: "Cabos loose tube de grande diâmetro e alta contagem de fibras", correct: false },
            { text: "Cabos ADSS de backbone aéreo para vãos acima de 100m", correct: false },
            { text: "Cabos submarinos blindados com fita de aço", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é a composição de materiais do ferrolho (ferrule) e do corpo do conector?",
        answers: [
            { text: "Ferrolho de cerâmica de zircônia e corpo de material termoplástico de alta resistência", correct: true },
            { text: "Ferrolho de plástico técnico e corpo de metal fundido com pintura epóxi", correct: false },
            { text: "Ferrolho de aço inoxidável e corpo de borracha elastomérica", correct: false },
            { text: "Ferrolho de alumínio anodizado e corpo de policarbonato simples", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Quais são as dimensões físicas aproximadas do Conector Fast Crimp CLICK?",
        answers: [
            { text: "8,9 mm (L) × 7,4 mm (A) × 53 mm (C)", correct: true },
            { text: "10 mm (L) × 10 mm (A) × 60 mm (C)", correct: false },
            { text: "6 mm (L) × 6 mm (A) × 45 mm (C)", correct: false },
            { text: "12 mm (L) × 8 mm (A) × 70 mm (C)", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual é a faixa de temperatura de operação e armazenamento deste conector?",
        answers: [
            { text: "-40 °C até +80 °C para ambas as situações", correct: true },
            { text: "-20 °C até +65 °C em operação e 0 °C a +50 °C em estoque", correct: false },
            { text: "0 °C até +50 °C em operação e -20 °C a +60 °C em estoque", correct: false },
            { text: "-10 °C até +70 °C para ambas as situações", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual carga de tração o conector suporta sem exceder a variação de 0,2 dB na atenuação?",
        answers: [
            { text: "Até 2,5 N, quando aplicado ao cabo Speed Star compacto", correct: true },
            { text: "Até 10 N, garantido pela trava de clique", correct: false },
            { text: "Até 50 N, devido ao corpo termoplástico reforçado", correct: false },
            { text: "O conector é imune a cargas de tração por ser metálico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Quantas vezes o Conector Fast Crimp CLICK SC-UPC pode ser reutilizado?",
        answers: [
            { text: "Até 5 reutilizações, mantendo as características de inserção", correct: true },
            { text: "Apenas uma reutilização", correct: false },
            { text: "Produto de uso único, não reutilizável", correct: false },
            { text: "Reutilização ilimitada, desde que clivado novamente", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Para a preparação correta, qual o comprimento de decapagem da capa externa do cabo DROP?",
        answers: [
            { text: "50 mm", correct: true },
            { text: "30 mm", correct: false },
            { text: "20 mm", correct: false },
            { text: "60 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual o comprimento correto para a remoção do acrilato e qual deve ser o comprimento total da fibra após a clivagem?",
        answers: [
            { text: "Remoção de 20 mm de acrilato; comprimento total da fibra clivada de 29,4 ± 0,1 mm", correct: true },
            { text: "Remoção de 10 mm de acrilato; comprimento total da fibra clivada de 25 ± 0,5 mm", correct: false },
            { text: "Remoção de 30 mm de acrilato; comprimento total da fibra clivada de 32 ± 0,2 mm", correct: false },
            { text: "Remoção de 50 mm de acrilato; comprimento total da fibra clivada de 20 ± 0,1 mm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Quais são as principais partes que compõem o conector CLICK?",
        answers: [
            { text: "Corpo do conector, braçadeira removível, tampa de fixação, capa e grampo de abertura", correct: true },
            { text: "Ferrolho, sleeve metálico, adaptador óptico e mola de compressão", correct: false },
            { text: "Núcleo óptico, blindagem corrugada, rip cord e capa externa", correct: false },
            { text: "Conjunto composto por conector macho, conector fêmea, adaptador e sistema de trava por rosca", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Quais ferramentas são essenciais para realizar a conectorização CLICK?",
        answers: [
            { text: "Decapador de DROP, decapador de acrilato, clivador óptico de precisão, álcool isopropílico e papel", correct: true },
            { text: "Conjunto formado por máquina de fusão e forno de retração de tubetes, utilizado para garantir emendas bem protegidas", correct: false },
            { text: "Apenas um alicate universal e estilete comum", correct: false },
            { text: "Power Meter e OTDR são as únicas ferramentas necessárias", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual órgão é responsável pela certificação deste produto no Brasil?",
        answers: [
            { text: "ANATEL", correct: true },
            { text: "INMETRO", correct: false },
            { text: "ISO", correct: false },
            { text: "IEC", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "O que acontece se o grampo de abertura não for utilizado corretamente durante a montagem?",
        answers: [
            { text: "A fibra pode não atingir o ponto de contato interno, resultando em perda total de sinal", correct: true },
            { text: "O conector mudará automaticamente seu polimento para APC", correct: false },
            { text: "A resistência mecânica do cabo aumentará para 50 N", correct: false },
            { text: "A cor do conector passará de azul para verde", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FC-CK-SC-UPC – Conector Óptico Fast Crimp CLICK SC-UPC – Redes FTTH / Single Mode",
        question: "Qual a função da braçadeira removível no processo de instalação?",
        answers: [
            { text: "Garantir a fixação primária do cabo DROP antes do fechamento final da tampa de fixação", correct: true },
            { text: "Servir como guia para o álcool isopropílico limpar a fibra", correct: false },
            { text: "Substituir o uso do clivador de precisão", correct: false },
            { text: "Proteger o ferrolho contra riscos durante o transporte", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Qual é o objetivo principal do FT KIT PRO Transcend e para qual perfil é indicado?",
        answers: [
            { text: "Oferecer uma solução completa de ferramentas para instalação, conectorização e testes para técnicos e provedores FTTH", correct: true },
            { text: "Disponibilizar equipamentos de laboratório para engenheiros de redes submarinas", correct: false },
            { text: "Substituir máquinas de fusão automática em backbones de longa distância", correct: false },
            { text: "Atender usuários domésticos que desejam realizar o conserto ou a manutenção de roteadores Wi-Fi de forma prática e acessível", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Qual é a principal vantagem estratégica de utilizar o kit completo em vez de ferramentas avulsas?",
        answers: [
            { text: "Garantir a padronização do processo de instalação, ganho de produtividade e qualidade nas terminações em campo", correct: true },
            { text: "Eliminar a necessidade de qualquer treinamento técnico para o instalador", correct: false },
            { text: "Reduzir automaticamente a atenuação da rede sem necessidade de testes", correct: false },
            { text: "Permitir a execução de fusões ópticas sem o uso de energia elétrica", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Qual é a função do clivador óptico e por que sua qualidade é crítica?",
        answers: [
            { text: "Realizar o corte preciso da fibra; sua qualidade influencia diretamente na perda de inserção do conector", correct: true },
            { text: "Remover a capa externa do cabo DROP; sua qualidade evita o rompimento da fibra", correct: false },
            { text: "Fundir as fibras por arco elétrico; sua qualidade garante a continuidade do sinal", correct: false },
            { text: "Medir a potência do sinal óptico; a precisão e a qualidade dessa medição ajudam a evitar a queima do receptor óptico", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Como o Medidor de Potência Óptica (Power Meter) deve ser utilizado em campo?",
        answers: [
            { text: "Para medir a potência do sinal recebido, operando normalmente em 1310 nm, 1490 nm e 1550 nm", correct: true },
            { text: "Para identificar falhas visíveis através da emissão de luz vermelha no ferrolho", correct: false },
            { text: "Para realizar a decapagem automática do acrilato da fibra", correct: false },
            { text: "Para substituir o uso de fontes de luz em enlaces multimodo de 850 nm", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Qual é a função da Caneta Localizadora Visual (VFL) no diagnóstico de redes?",
        answers: [
            { text: "Identificar visualmente quebras, microcurvaturas e conexões incorretas em curtas distâncias", correct: true },
            { text: "Meder a atenuação exata do enlace em decibéis (dB)", correct: false },
            { text: "Certificar a largura de banda do cliente final", correct: false },
            { text: "Substituir o Power Meter na medição de sinais de vídeo operando na faixa de 1550 nm, mantendo a confiabilidade das leituras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Diferencie as funções do Decapador de DROP e do Decapador de Acrilato presentes no kit:",
        answers: [
            { text: "O de DROP remove a capa externa do cabo; o de acrilato remove o revestimento da fibra nua antes da clivagem", correct: true },
            { text: "O de DROP corta os elementos metálicos; o de acrilato realiza a clivagem da fibra", correct: false },
            { text: "O de acrilato remove a capa externa; o de DROP limpa a fibra com álcool isopropílico", correct: false },
            { text: "Ambos possuem a mesma função, servindo apenas como reserva um do outro", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Quais itens de limpeza compõem o kit e qual sua importância?",
        answers: [
            { text: "Lenços sem fiapos, álcool isopropílico e canetas/bastões de limpeza; essenciais para evitar perdas por sujeira", correct: true },
            { text: "Pano comum, detergente e ar comprimido; essenciais para lubrificar a passagem do cabo", correct: false },
            { text: "Escovas metálicas e solventes industriais; essenciais para remover o gel da fibra", correct: false },
            { text: "Apenas água destilada e algodão, materiais essenciais para o resfriamento adequado da fibra após o processo de clivagem", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Qual vantagem a organização em maleta ou bolsa oferece ao técnico?",
        answers: [
            { text: "Proteção das ferramentas de precisão, agilidade no atendimento e redução de perdas de componentes em campo", correct: true },
            { text: "Aumento automático da sensibilidade do Power Meter através do isolamento térmico", correct: false },
            { text: "Substituição da necessidade de testes finais após a conectorização", correct: false },
            { text: "Atuação como isolante elétrico para trabalhos em alta tensão", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Em quais etapas da instalação FTTH este kit é indispensável?",
        answers: [
            { text: "Em todas as etapas: desde a preparação do cabo, decapagem, clivagem, conectorização até os testes de recepção", correct: true },
            { text: "Apenas durante o lançamento do cabo aéreo na rede externa", correct: false },
            { text: "Somente no momento da fusão no backbone principal", correct: false },
            { text: "Exclusivamente na etapa de fusão em caixas de emenda óptica (CEO), garantindo a correta união e proteção das fibras", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Quais itens estão inclusos na composição completa do FT KIT PRO Transcend?",
        answers: [
            {   text: "Mala para transporte, Medidor de Potência Óptica (Power Meter), Caneta Óptica para teste de Luz, Clivador óptico, Decapador de Cabo óptico Mini Flat Drop, Decapador de Acrilato, Alicate de corte de Arame, Álcool Isopropílico, Decapador Horizontal para sangria de Loose Tube, Tesoura para corte de Aramida, Caneta de Limpeza, Bastões de Limpeza para Conectores, Tubetes para proteção da fusão das Fibras ópticas", 
                correct: true 
            },
            { 
                text: "Mala para transporte reforçada, Medidor de Potência Óptica digital com display retroiluminado, Fonte de Luz Óptica para testes de enlace, Máquina de fusão portátil para fibra monomodo, Clivador óptico de alta precisão, Decapador de Acrilato ajustável, Alicate de corte profissional, Álcool Isopropílico para limpeza técnica, OTDR para análise de redes FTTH, Tesoura técnica para fibras sintéticas, Caneta de inspeção visual óptica, Adaptadores ópticos SC/APC, Tubetes termoencolhíveis para emendas ópticas", 
                correct: false 
            },
            { 
                text: "Maleta rígida com alça retrátil, Medidor de Potência Óptica com calibração automática, Caneta Óptica para teste visual de continuidade, Testador de cabos ópticos e metálicos multifunção, Clivador óptico manual para campo, Decapador circular de cabos ópticos, Alicate universal de manutenção, Álcool Isopropílico grau eletrônico, Multímetro digital para medições auxiliares, Tesoura técnica multiuso reforçada, Limpador químico de conectores ópticos, Conectores rápidos SC/APC, Protetores plásticos para emendas de fibra", 
                correct: false 
            },
            { 
                text: "Bolsa para ferramentas, Medidor de Potência Óptica, Fonte de luz óptica, Conectores mecânicos, Decapador Mini Flat Drop, Alicate universal, Testador de continuidade, Álcool Isopropílico, Caneta de Limpeza, Adaptador SC-LC, Patch cord óptico, Tesoura para cabo elétrico, Módulo SFP", 
                correct: false 
            }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Quais itens opcionais podem ser adquiridos para complementar o kit Transcend?",
        answers: [
            { text: "Decapador circular para cabos ópticos e decapador horizontal para sangria de fibras", correct: true },
            { text: "Adaptador de rede, medidor de alta faixa, gel de limpeza e testador multimodo", correct: false },
            { text: "Conectores SC-APC, LC-UPC, máquina de fusão e adaptadores metálicos", correct: false },
            { text: "Bolsa com rodas, analisador OTDR de 100km e câmera microscópica Wi-Fi", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT PRO TRANSCEND – Kit Profissional de Ferramentas para Redes FTTH",
        question: "Por que o álcool incluído no kit deve ser obrigatoriamente o isopropílico?",
        answers: [
            { text: "Devido à sua alta pureza e rápida evaporação, não deixando resíduos ou umidade que prejudicam o sinal óptico", correct: true },
            { text: "Para garantir que o técnico consiga remover a capa plástica do cabo com mais facilidade", correct: false },
            { text: "Porque é o único solvente capaz de fundir quimicamente as fibras sem calor", correct: false },
            { text: "Para lubrificar o ferrolho do conector e facilitar o encaixe no adaptador, reduzindo o atrito e garantindo uma conexão mais suave e segura", correct: false }
        ]
    },
        {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Qual é o objetivo principal do FT KIT Básico e para qual perfil ele é indicado?",
        answers: [
            { text: "Atender instalações e manutenções básicas em redes FTTH, sendo ideal para operações de baixa complexidade", correct: true },
            { text: "Substituir equipamentos avançados como OTDR e máquinas de fusão em backbones para melhor aproveitamento das ferramentas", correct: false },
            { text: "Realizar certificações ópticas complexas em ambientes laboratoriais", correct: false },
            { text: "Atuar exclusivamente em redes de data center com fibras multimodo", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "O que diferencia o FT KIT Básico de um kit profissional completo?",
        answers: [
            { text: "A presença apenas das ferramentas essenciais para instalação e testes básicos, focando em baixo custo e praticidade", correct: true },
            { text: "A ausência total de instrumentos de medição óptica como o Power Meter", correct: false },
            { text: "A inclusão de ferramentas para fusão óptica e certificação de rede", correct: false },
            { text: "O foco exclusivo em cabeamento estruturado metálico (UTP), direcionado à organização de redes baseadas em cabos de par trançado.", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Qual é a função do Medidor de Potência Óptica (Power Meter) e em quais comprimentos de onda ele atua?",
        answers: [
            { text: "Medir o nível de potência recebido no ponto de atendimento, operando em 1310 nm, 1490 nm e 1550 nm", correct: true },
            { text: "Localizar falhas por reflexão ao longo do cabo, operando apenas em 1550 nm", correct: false },
            { text: "Realizar a clivagem automática da fibra através de sensores ópticos", correct: false },
            { text: "Atuar como fonte de luz visível para identificar o caminho da fibra", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Por que a Caneta Óptica (VFL) é considerada indispensável neste kit?",
        answers: [
            { text: "Permite o diagnóstico visual rápido de quebras, microcurvaturas e trocas de fibras em enlaces curtos", correct: true },
            { text: "Possui alcance superior ao de um OTDR para localizar rompimentos", correct: false },
            { text: "É a única ferramenta capaz de medir a atenuação exata em decibéis (dB)", correct: false },
            { text: "Serve para fundir mecanicamente as fibras dentro do conector", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Qual o papel do clivador óptico e qual o impacto de uma clivagem mal executada?",
        answers: [
            { text: "Realizar o corte preciso da fibra; uma clivagem ruim causa aumento da perda de inserção e falha na conectorização", correct: true },
            { text: "Remover o acrilato da fibra; uma clivagem ruim aumenta a potência óptica transmitida", correct: false },
            { text: "Inspecionar o polimento do conector; uma clivagem ruim reduz a refletância do sinal", correct: false },
            { text: "Limpar a face da fibra; uma clivagem ruim melhora o desempenho do enlace, mesmo sem garantir a qualidade da conexão", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Diferencie a função do decapador de cabo DROP e do decapador de acrilato:",
        answers: [
            { text: "O decapador de cabo remove a capa externa (Mini Flat); o de acrilato remove o revestimento da fibra antes da clivagem", correct: true },
            { text: "O decapador de acrilato corta elementos metálicos; o de cabo realiza o polimento do conector garantindo melhores resultados", correct: false },
            { text: "Ambos servem para medir o diâmetro do núcleo da fibra durante a preparação", correct: false },
            { text: "O decapador de cabo limpa a fibra enquanto o de acrilato realiza a clivagem", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Por que itens de limpeza óptica e o álcool isopropílico são mantidos mesmo em um kit básico?",
        answers: [
            { text: "Para garantir que a fibra esteja livre de gordura e poeira, evitando perdas de sinal e contaminação do conector", correct: true },
            { text: "Para lubrificar a fibra e facilitar o deslizamento dentro do conector mecânico", correct: false },
            { text: "Para aumentar quimicamente a potência do transmissor óptico", correct: false },
            { text: "Para substituir a necessidade de utilizar o clivador de precisão", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Qual a importância da bolsa de transporte que acompanha o kit?",
        answers: [
            { text: "Proteger as ferramentas de precisão contra impactos e organizar os itens para agilizar o atendimento em campo", correct: true },
            { text: "Atuar como um isolante elétrico para trabalhos em redes de alta tensão", correct: false },
            { text: "Servir como uma caixa de emenda temporária em caso de emergência", correct: false },
            { text: "Substituir a necessidade de utilização de equipamentos de teste para a certificação completa da rede, com validações técnicas", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Em qual etapa da ativação de um cliente o técnico utiliza o FT KIT Básico?",
        answers: [
            { text: "Na preparação do cabo drop, conectorização em campo e verificação final do sinal recebido na casa do assinante", correct: true },
            { text: "Exclusivamente durante o planejamento e projeto lógico da rede óptica", correct: false },
            { text: "Apenas para fusão de fibras em caixas de emenda aéreas (CEO)", correct: false },
            { text: "Somente em manutenções de cabos de longa distância (backbone)", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Qual é a principal limitação técnica de operar apenas com um kit básico?",
        answers: [
            { text: "Possui diagnóstico limitado para identificar a distância exata de rompimentos, ao contrário de kits com OTDR", correct: true },
            { text: "Impossibilita qualquer tipo de teste de luz ou verificação de sinal", correct: false },
            { text: "As ferramentas não são compatíveis com os conectores padrão SC-UPC ou SC-APC", correct: false },
            { text: "Exige obrigatoriamente o uso de uma máquina de fusão para finalizar o serviço, para fazer a rede funcionar", correct: false }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Quais são os itens exatos que compõem o FT KIT Básico?",
        answers: [
            { 
                text: "Maleta para transporte, Power Meter, Caneta óptica para teste de luz (VFL), Clivador, decapador de Drop, decapador de acrilato e reservatório para álcool", 
                correct: true 
            },
            { 
                text: "Maleta para transporte, Power Meter óptico, Fonte de Luz, Clivador manual, decapador universal, caneta de limpeza e estojo de proteção", 
                correct: false 
            },
            { 
                text: "Maleta para transporte, Caneta VFL, Testador de continuidade óptica, decapador de Drop, álcool isopropílico, clivador básico e tubetes", 
                correct: false 
            },
            { 
                text: "Maleta para transporte, Power Meter digital, Caneta de inspeção visual, decapador de acrilato, clivador de precisão, tesoura técnica e reservatório plástico", 
                correct: false 
            }
        ]
    },
    {
        category: "fiber",
        product: "FT KIT BÁSICO – Kit de Ferramentas para Instalações FTTH",
        question: "Qual é o principal diferencial comercial deste produto para um provedor?",
        answers: [
            { text: "Oferecer o menor custo de aquisição garantindo as ferramentas essenciais para a rotina do instalador", correct: true },
            { text: "Garantir a automação completa da rede sem intervenção humana", correct: false },
            { text: "Ser o único kit homologado para uso em data centers de alta densidade", correct: false },
            { text: "Incluir licenças de software para gestão de rede via satélite", correct: false }
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
