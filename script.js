const sections = {
    inicio: `
        <div class="fade-in">
            <h2>Anor Londo - A Cidade dos Deuses</h2>
            <p>Bem-vindo ao repositório definitivo das Eras. Este site foi forjado para guiar aqueles que buscam desafiar o destino e a própria Maldição.</p>
            
            <div class="lore-img-full">
                <img src="nuno-goncalves-anor-londo-001.jpg" alt="Fundo do Site">
            </div>

            <p>Aqui você encontrará os registros de batalhas, as linhagens de poder e a história de reinos que já foram gloriosos e hoje são apenas cinzas.</p>
        </div>
    `,
    bosses: `
        <div class="fade-in">
            <h2>Inimigos Formidáveis</h2>
            
            <div class="content-wrapper">
                <div class="content-text">
                    <h3>Ornstein & Smough</h3>
                    <p>Os guardiões da catedral. Um teste de paciência e habilidade em Anor Londo. Use os pilares a seu favor.</p>
                </div>
                <div class="content-img">
                    <img src="o-s.jpg" alt="Ornstein e Smough">
                </div>
            </div>

            <div class="content-wrapper">
                <div class="content-text">
                    <h3>Fume Knight</h3>
                    <p>O mestre de armas de Dark Souls II. Sua agilidade com a espada colossal punirá qualquer erro de tempo.</p>
                </div>
                <div class="content-img">
                    <img src="fumekn.jpg" alt="Fume Knight">
                </div>
            </div>
        </div>
    `,
    builds: `
        <div class="fade-in">
            <h2>Caminhos do Poder</h2>
            <div class="content-wrapper">
                <div class="content-text">
                    <h3>The GiantDad</h3>
                    <p>A build lendária de resistência. Máscara do Pai, Armadura de Gigante e a Zweihander de fogo.</p>
                </div>
                <div class="content-img">
                    <img src="giantdad.jpg" alt="GiantDad">
                </div>
            </div>
        </div>
    `,
    lore: `
        <div class="fade-in">
            <h2>Resumo da Lore dos Três Jogos</h2>
            
            <h3>Dark Souls I: Morto-Vivo Escolhido</h3>
            <p>Um dia numa terra reinada por dragões de pedra imortais, foi contemplada em seu subterrâneo por uma chama primordial, essa chama continha o poder da vida e de 4 almas de Lordes.
    Essas almas foram dividas entre Nito: Alma dos Mortos, Izalith: Alma das Chamas, Gwyn: Alma da luz e do Sol, e por último o mais poderoso e insignificante, Pigmeu Furtivo: A Alma da Escuridão.
    A alma da escuridão tinha um poder inacabável, mesmo que repartida diversas vezes, ainda possuía seu oder primordial, com isso, pigmeu a dividiu com sua espécie, gerando no meio de tantos deuses, a raça humana.
    Os 3 primeiros lordes se uniram a um Dragão descamado chamado Seath, que traiu sua espécie para que os lordes tomassem poder da superfície. Com isso ganhando o título de duque do Grande Rei Gwyn.</p>
    <p>Com passar das eras a chama primordial começou a se apagar, numa tentativa desesperada de ascender a chama, a Izalith foi consumida por sua própria chama do Caos, Nito sucumbiu ao abismo e o pigmeu estava desaparecido, com isso, Gwyn decide lançar uma maldição que impediria que todo e qualquer humano de morrer antes de perder seu verdadeiro propósito.
    Depois de tudo isso, Gwyn sacrificou sua vida para ascender a chama mais uma vez, e lançou uma profecia onde um morto-vivo(humano) escolhido iria coletar todas as almas de lordes e se sacrificaria pela chama futuramente.</p>
            <div class="lore-img-full">
                <img src="wallpaperflare.com_wallpaper (1).jpg" alt="Gwyn">
            </div>

            <h3>Dark Souls II: O Portador da Maldição</h3>
            <p>Com a maldição dos Mortos-Vivos lançada por Gwyn, um dia um morto-vivo portador da maldição, após tantas vezes tendo perdido seu caminho e suas memórias, decidiu reescrever sua história indo atrás de suas origens.
    No caminho a encontro dessas origens ele encontra uma terra distante, nomeada de Drangleic, oriental em relação a antiga terra de Lordran que possuía grandes lordes.
    Drangleic havia sido amaldiçoada pelo abismo e a ganância, seu Grande Rei Vendrick fora enganado e persuadido a atacar um de seus reinos vizinhos, o dos Gigantes, o que levou a uma grande guerra com muitas baixas e destruição.</p>
    <p>Após o fim dessa grande guerra, o reino em pedaços começou a perde um a um os seus governantes, como o Rei de ferro, o Duque de Freja, Rei de marfim, Rei afundado, O Apodrecido e A Pecadora perdida. Com todas essas perdas o Rei Vendrick entrou em desepero e viajou para a Cripta dos Mortos-vivos e lá se escondeu até perder a humanidade e se tornar um vazio.
    Nesse contexto, o portador da maldição vai em busca de encontrar a razão pela qual possuí essa maldição, e no processo descbobre este reino acabado e uma nova oportunidade de subscrever um ciclo.</p>
            <div class="lore-img-full">
                <img src="wallpaperflare.com_wallpaper.jpg" alt="Majula">
            </div>

            <h3>Dark Souls III: O Aceso</h3>
            <p>Com a maldição dos Mortos-Vivos lançada por Gwyn, um dia um morto-vivo portador da maldição, após tantas vezes tendo perdido seu caminho e suas memórias, decidiu reescrever sua história indo atrás de suas origens.
No caminho a encontro dessas origens ele encontra uma terra distante, nomeada de Drangleic, oriental em relação a antiga terra de Lordran que possuía grandes lordes.</p>
<p>Drangleic havia sido amaldiçoada pelo abismo e a ganância, seu Grande Rei Vendrick fora enganado e persuadido a atacar um de seus reinos vizinhos, o dos Gigantes, o que levou a uma grande guerra com muitas baixas e destruição.</p>
<p>Após o fim dessa grande guerra, o reino em pedaços começou a perde um a um os seus governantes, como o Rei de ferro, o Duque de Freja, Rei de marfim, Rei afundado, O Apodrecido e A Pecadora perdida. Com todas essas perdas o Rei Vendrick entrou em desepero e viajou para a Cripta dos Mortos-vivos e lá se escondeu até perder a humanidade e se tornar um vazio.
Nesse contexto, o portador da maldição vai em busca de encontrar a razão pela qual possuí essa maldição, e no processo descbobre este reino acabado e uma nova oportunidade de subscrever um ciclo.</p>
            <div class="lore-img-full">
                <img src="zum1p18nk0y31.jpg" alt="FirstFlame">
            </div>
        </div>
    `
};

function showSection(sectionName) {
    const mainContent = document.getElementById('content');
    mainContent.style.opacity = 0;
    setTimeout(() => {
        mainContent.innerHTML = sections[sectionName];
        mainContent.style.opacity = 1;
    }, 150);
}

window.onload = () => showSection('inicio');
