/* ── CITY COORDS ─────────────────────────────────────── */
const COORDS = {
  "Jataí_GO":[-17.8783,-51.7158],"Encanto_RN":[-6.1119,-38.7153],"Promissão_SP":[-21.5361,-49.8578],
  "Betim_MG":[-19.9681,-44.1981],"Surubim_PE":[-7.8358,-35.7564],"Catalão_GO":[-18.1664,-47.9439],
  "Itabaiana_PB":[-7.3264,-35.3253],"Birigui_SP":[-21.2886,-50.3397],"Petrolina_PE":[-9.3981,-40.5028],
  "São Luiz Gonzaga_RS":[-28.4019,-54.9606],"Cabeceiras do Piauí_PI":[-3.7489,-41.5125],
  "Santos_SP":[-23.9608,-46.3336],"Várzea Grande_MT":[-15.6464,-56.1328],"Sousa_PB":[-6.7581,-38.2278],
  "Vacaria_RS":[-28.5131,-50.9358],"Araras_SP":[-22.3569,-47.3839],"Dois Irmãos_RS":[-29.5808,-51.0911],
  "Guanambi_BA":[-14.2231,-42.7814],"Palmas_TO":[-10.1833,-48.3336],"Bauru_SP":[-22.3147,-49.0608],
  "Santarém_PA":[-2.4468,-54.7081],"Tucuruí_PA":[-3.7661,-49.6728],"Guararema_SP":[-23.4136,-45.9739],
  "Natal_RN":[-5.7945,-35.2110],"Nova Petrópolis_RS":[-29.3728,-51.1158],"Barra Mansa_RJ":[-22.5443,-44.1756],
  "Campo Grande_MS":[-20.4686,-54.6218],"Manaus_AM":[-3.1190,-60.0217],"Indaial_SC":[-26.8978,-49.2317],
  "Maceió_AL":[-9.6658,-35.7350],"Niterói_RJ":[-22.8833,-43.1036],"Mococa_SP":[-21.4686,-47.0050],
  "Dois Lajeados_RS":[-28.9489,-51.9686],"Aracaju_SE":[-10.9472,-37.0731],"São Paulo_SP":[-23.5505,-46.6333],
  "Pedreiras_MA":[-4.5694,-44.6019],"Barreiras_BA":[-12.1514,-44.9908],"Cotriguaçu_MT":[-9.8603,-58.4217],
  "Arcos_MG":[-20.2783,-45.5375],"Sorocaba_SP":[-23.5015,-47.4526],"Itajaí_SC":[-26.9063,-48.6619],
  "Ariquemes_RO":[-9.9122,-63.0358],"Taió_SC":[-27.1153,-49.9986],"Ivoti_RS":[-29.6114,-51.1597],
  "Ituiutaba_MG":[-18.9672,-49.4644],"Dourados_MS":[-22.2215,-54.8058],"Teotônio Vilela_AL":[-9.9169,-36.3536],
  "Parobé_RS":[-29.6261,-50.8336],"Cuiabá_MT":[-15.5989,-56.0949],"Blumenau_SC":[-26.9194,-49.0661],
  "Recife_PE":[-8.0576,-34.8829],"Taubaté_SP":[-23.0258,-45.5556],"Foz do Iguaçu_PR":[-25.5469,-54.5882],
  "Simão Dias_SE":[-10.7378,-37.8136],"Baixo Guandu_ES":[-19.5208,-41.0186],"Mogi das Cruzes_SP":[-23.5233,-46.1861],
  "Frederico Westphalen_RS":[-27.3594,-53.3956],"Ilhéus_BA":[-14.7897,-39.0456],"Estrela_RS":[-29.4989,-51.9572],
  "Montes Claros_MG":[-16.7186,-43.8639],"Presidente Prudente_SP":[-22.1258,-51.3886],
  "Brejo do Cruz_PB":[-6.3428,-37.4953],"São Leopoldo_RS":[-29.7603,-51.1494],"Cáceres_MT":[-16.0722,-57.6789],
  "Manhuaçu_MG":[-20.2586,-42.0294],"Eunápolis_BA":[-16.3761,-39.5803],"Jaraguá do Sul_SC":[-26.4844,-49.0686],
  "Rondon do Pará_PA":[-4.7781,-48.0669],"Caxias do Sul_RS":[-29.1678,-51.1794],
  "Santa Cruz do Capibaribe_PE":[-7.9589,-36.2058],"Americana_SP":[-22.7392,-47.3319],
  "Itaipulândia_PR":[-25.1292,-54.3022],"Fortaleza_CE":[-3.7172,-38.5433],
  "Vitória da Conquista_BA":[-14.8658,-40.8442],"São Desidério_BA":[-12.3594,-44.9736],
  "Colorado_RS":[-28.5306,-52.9858],"Areia Branca_RN":[-4.9533,-37.1183],"Rondonópolis_MT":[-16.4703,-54.6356],
  "Santa Helena_PR":[-24.8692,-54.3297],"Sobral_CE":[-3.6908,-40.3497],"Olímpia_SP":[-20.7386,-48.9133],
  "Pontes e Lacerda_MT":[-15.2244,-59.3378],"Ijuí_RS":[-28.3878,-53.9136],"Guarujá_SP":[-23.9931,-46.2564],
  "Russas_CE":[-4.9419,-37.9736],"Canoas_RS":[-29.9194,-51.1836],"Carazinho_RS":[-28.2839,-52.7869],
  "Marechal Cândido Rondon_PR":[-24.5544,-54.0594],"Salgueiro_PE":[-8.0739,-39.1281],
  "Paranavaí_PR":[-23.0758,-52.4631],"Passos_MG":[-20.7178,-46.6097],"União da Vitória_PR":[-26.2281,-51.0872],
  "Cruzeiro do Sul_RS":[-29.5144,-51.9958],"Três Coroas_RS":[-29.5139,-50.7781],"Adamantina_SP":[-21.6836,-51.0769],
  "Uberlândia_MG":[-18.9186,-48.2772],"Jequié_BA":[-13.8514,-40.0822],"Joinville_SC":[-26.3044,-48.8461],
  "Governador Valadares_MG":[-18.8511,-41.9494],"Macaé_RJ":[-22.3714,-41.7869],
  "Rio Verde_GO":[-17.7981,-50.9261],"São Simão_GO":[-18.9944,-50.5472],"Crateús_CE":[-5.1692,-40.6761],
  "Juazeiro do Norte_CE":[-7.2131,-39.3150],"Piumhi_MG":[-20.4683,-45.9578],"Camaçari_BA":[-12.6997,-38.3244],
  "Boa Vista_RR":[2.8197,-60.6733],"Paulista_PE":[-7.9406,-34.8739],"Santo Cristo_RS":[-27.8319,-54.6953],
  "Caicó_RN":[-6.4583,-37.0972],"Araçatuba_SP":[-21.2097,-50.4294],"Belém_PA":[-1.4558,-48.5044],
  "Santa Cruz do Sul_RS":[-29.7178,-52.4261],"Mossoró_RN":[-5.1878,-37.3439],
  "Lucas do Rio Verde_MT":[-13.0561,-55.9128],"Santarém_PB":[-7.0000,-37.5000],
  "Upanema_RN":[-5.6564,-37.2733],"Juazeiro_BA":[-9.4178,-40.5011],"Florianópolis_SC":[-27.5969,-48.5495],
  "Cajazeiras_PB":[-6.8919,-38.5594],"Linhares_ES":[-19.3950,-40.0644],"Nova Mutum_MT":[-13.8286,-56.0808],
  "Arapiraca_AL":[-9.7522,-36.6611],"Brusque_SC":[-27.0978,-48.9178],"Rolante_RS":[-29.6508,-50.7278],
  "Santa Fé do Sul_SP":[-20.2061,-50.9289],"Nova Canaã do Norte_MT":[-10.6303,-57.7297],
  "Itacarambi_MG":[-15.0989,-44.0997],"Monte Carmelo_MG":[-18.7272,-47.4978],
  "Amargosa_BA":[-13.0372,-39.6011],"Santa Rita de Cássia_BA":[-11.0100,-44.5244],
  "Colatina_ES":[-19.5378,-40.6297],"Macapá_AP":[0.0389,-51.0664],"Rio Branco_AC":[-9.9756,-67.8111],
  "Piracicaba_SP":[-22.7253,-47.6492],"Tubarão_SC":[-28.4756,-49.0136],
  "Dias d'Ávila_BA":[-12.6128,-38.3011],"João Monlevade_MG":[-19.8072,-43.1722],
  "Aimorés_MG":[-19.4918,-41.0616],
  "Alagoinhas_BA":[-12.1335,-38.4208],
  "Alegrete_RS":[-29.7902,-55.7949],
  "Alexânia_GO":[-16.0834,-48.5078],
  "Alvorada_RS":[-29.9981,-51.0773],
  "Ananindeua_PA":[-1.374,-48.4017],
  "Antônio Prado_RS":[-28.8555,-51.2796],
  "Anápolis_GO":[-16.3333,-48.9526],
  "Aparecida de Goiânia_GO":[-16.8227,-49.2453],
  "Apodi_RN":[-5.6631,-37.7969],
  "Apucarana_PR":[-23.5525,-51.4611],
  "Araguatins_TO":[-5.6529,-48.1162],
  "Araguaína_TO":[-7.1937,-48.2065],
  "Araranguá_SC":[-28.9349,-49.4858],
  "Araraquara_SP":[-21.7887,-48.1773],
  "Araruama_RJ":[-22.7447,-42.3231],
  "Araxá_MG":[-19.6009,-46.9409],
  "Arcoverde_PE":[-8.4209,-37.0548],
  "Arroio Trinta_SC":[-26.9302,-51.3349],
  "Atibaia_SP":[-23.1177,-46.5548],
  "Avaré_SP":[-23.1045,-48.9259],
  "Balneário Camboriú_SC":[-26.9924,-48.634],
  "Balsas_MA":[-7.5321,-46.0372],
  "Barbacena_MG":[-21.2255,-43.7735],
  "Bariri_SP":[-22.0746,-48.7395],
  "Barra Velha_SC":[-26.6338,-48.6835],
  "Barra do Garças_MT":[-15.8916,-52.2615],
  "Barreirinhas_MA":[-2.7541,-42.826],
  "Barretos_SP":[-20.5531,-48.5698],
  "Barros Cassal_RS":[-29.0949,-52.5832],
  "Barueri_SP":[-23.5112,-46.8765],
  "Belford Roxo_RJ":[-22.7636,-43.3996],
  "Belo Horizonte_MG":[-19.9227,-43.9451],
  "Benevides_PA":[-1.3556,-48.2522],
  "Bento Gonçalves_RS":[-29.1657,-51.5201],
  "Bezerros_PE":[-8.2372,-35.7558],
  "Biguaçu_SC":[-27.4961,-48.6541],
  "Boituva_SP":[-23.2839,-47.6738],
  "Bom Jesus da Lapa_BA":[-13.2828,-43.1802],
  "Bom Jesus do Itabapoana_RJ":[-21.0906,-41.7809],
  "Botucatu_SP":[-22.888,-48.4411],
  "Brasnorte_MT":[-12.1219,-58.0043],
  "Brasília_DF":[-15.794,-47.8828],
  "Braço do Norte_SC":[-28.2729,-49.1623],
  "Brejo Santo_CE":[-7.491,-38.9859],
  "Brodowski_SP":[-20.9862,-47.6579],
  "Brumado_BA":[-14.2025,-41.6701],
  "Buritama_SP":[-21.0664,-50.1448],
  "Bálsamo_SP":[-20.7344,-49.5807],
  "Cabedelo_PB":[-6.9732,-34.8352],
  "Cachoeirinha_RS":[-29.9493,-51.0899],
  "Cachoeiro de Itapemirim_ES":[-20.8481,-41.1113],
  "Cacoal_RO":[-11.4333,-61.4421],
  "Caetité_BA":[-14.0692,-42.4852],
  "Caldas Novas_GO":[-17.745,-48.625],
  "Camaquã_RS":[-30.8525,-51.8076],
  "Camaragibe_PE":[-8.0214,-34.9811],
  "Cambé_PR":[-23.2782,-51.278],
  "Campina Grande_PB":[-7.2247,-35.8771],
  "Campinas_SP":[-22.9056,-47.0596],
  "Campo Bom_RS":[-29.6784,-51.0572],
  "Campo Largo_PR":[-25.4598,-49.5271],
  "Campo Verde_MT":[-15.5431,-55.1591],
  "Campos dos Goytacazes_RJ":[-21.7546,-41.3242],
  "Canaã dos Carajás_PA":[-6.5297,-49.8517],
  "Candelária_RS":[-29.6684,-52.7895],
  "Capivari de Baixo_SC":[-28.4498,-48.9631],
  "Capão da Canoa_RS":[-29.7508,-50.0211],
  "Caratinga_MG":[-19.7901,-42.1405],
  "Cariacica_ES":[-20.2632,-40.4165],
  "Carlos Barbosa_RS":[-29.2978,-51.5006],
  "Carolina_MA":[-7.3313,-47.4739],
  "Caruaru_PE":[-8.283,-35.9723],
  "Cascavel_PR":[-24.9555,-53.4561],
  "Castanhal_PA":[-1.2927,-47.9224],
  "Castro_PR":[-24.7941,-49.9973],
  "Caçador_SC":[-26.7738,-51.0135],
  "Caçapava do Sul_RS":[-30.5113,-53.4917],
  "Caçapava_SP":[-23.0992,-45.7076],
  "Cerqueira César_SP":[-23.0353,-49.1651],
  "Cerquilho_SP":[-23.1627,-47.7434],
  "Cerro Largo_RS":[-28.1475,-54.7384],
  "Chapecó_SC":[-27.0922,-52.6167],
  "Cianorte_PR":[-23.662,-52.6104],
  "Coari_AM":[-4.0886,-63.1431],
  "Codó_MA":[-4.4556,-43.8924],
  "Colíder_MT":[-10.8095,-55.454],
  "Colômbia_SP":[-20.1774,-48.6873],
  "Condado_PE":[-7.5879,-35.0999],
  "Contagem_MG":[-19.9133,-44.0841],
  "Cordeiro_RJ":[-22.0611,-42.3537],
  "Cornélio Procópio_PR":[-23.1825,-50.6499],
  "Coruripe_AL":[-10.125,-36.1761],
  "Cotia_SP":[-23.6039,-46.9189],
  "Criciúma_SC":[-28.679,-49.3696],
  "Curitiba_PR":[-25.4296,-49.2713],
  "Currais Novos_RN":[-6.2627,-36.5173],
  "Curvelo_MG":[-18.7572,-44.4306],
  "Divinópolis_MG":[-20.1598,-44.8739],
  "Dois Vizinhos_PR":[-25.7465,-53.0554],
  "Eldorado do Sul_RS":[-29.9976,-51.3064],
  "Encantado_RS":[-29.2393,-51.8745],
  "Entre Rios do Oeste_PR":[-24.7002,-54.2448],
  "Erechim_RS":[-27.6351,-52.2739],
  "Escada_PE":[-8.3624,-35.2366],
  "Esteio_RS":[-29.8512,-51.1779],
  "Euclides da Cunha_BA":[-10.5068,-39.0166],
  "Eusébio_CE":[-3.8932,-38.4635],
  "Farroupilha_RS":[-29.2265,-51.3468],
  "Fazenda Rio Grande_PR":[-25.6458,-49.3127],
  "Feira de Santana_BA":[-12.2579,-38.9598],
  "Fernandópolis_SP":[-20.2826,-50.2501],
  "Formosa do Oeste_PR":[-24.2967,-53.3128],
  "Forquilha_CE":[-3.7994,-40.2634],
  "Fraiburgo_SC":[-27.0233,-50.92],
  "Franca_SP":[-20.5382,-47.401],
  "Francisco Beltrão_PR":[-26.0791,-53.0534],
  "Frutal_MG":[-20.022,-48.928],
  "Garibaldi_RS":[-29.2562,-51.5269],
  "Gaspar_SC":[-26.9307,-48.9567],
  "Goiana_PE":[-7.5606,-34.9959],
  "Goioerê_PR":[-24.1852,-53.0251],
  "Goiânia_GO":[-16.6809,-49.2533],
  "Gravatá_PE":[-8.199,-35.5627],
  "Guaramirim_SC":[-26.4745,-48.9981],
  "Guararapes_SP":[-21.2543,-50.644],
  "Guaratinguetá_SP":[-22.8058,-45.1909],
  "Guaratuba_PR":[-25.8806,-48.5751],
  "Guaraçaí_SP":[-21.0322,-51.21],
  "Guarulhos_SP":[-23.4676,-46.5278],
  "Guaxupé_MG":[-21.3088,-46.7191],
  "Guaíba_RS":[-30.1131,-51.3294],
  "Hortolândia_SP":[-22.862,-47.2164],
  "Humaitá_AM":[-7.5099,-63.0249],
  "Ibirubá_RS":[-28.6302,-53.0961],
  "Icapuí_CE":[-4.7158,-37.3535],
  "Igarapé-Miri_PA":[-1.9785,-48.9635],
  "Iguatu_CE":[-6.3619,-39.2972],
  "Imbituva_PR":[-25.2293,-50.6051],
  "Imperatriz_MA":[-5.5269,-47.4781],
  "Indaiatuba_SP":[-23.0908,-47.2181],
  "Inhapim_MG":[-19.5502,-42.121],
  "Inhumas_GO":[-16.3611,-49.5001],
  "Ipatinga_MG":[-19.4778,-42.5271],
  "Ipaumirim_CE":[-6.7883,-38.7172],
  "Ipira_SC":[-27.4053,-51.7735],
  "Ipirá_BA":[-12.1578,-39.7417],
  "Iporá_GO":[-16.4408,-51.1181],
  "Irecê_BA":[-11.3035,-41.8558],
  "Itabaiana_SE":[-10.6856,-37.4271],
  "Itaberaba_BA":[-12.5242,-40.3059],
  "Itabuna_BA":[-14.7932,-39.275],
  "Itamarandiba_MG":[-17.8574,-42.8597],
  "Itapaci_GO":[-14.9522,-49.5511],
  "Itapema_SC":[-27.0947,-48.6138],
  "Itapetininga_SP":[-23.5886,-48.0483],
  "Itapeva_SP":[-23.9849,-48.8804],
  "Itapira_SP":[-22.4361,-46.8217],
  "Itatiba_SP":[-23.0056,-46.8398],
  "Itaíba_PE":[-8.9467,-37.4212],
  "Itumbiara_GO":[-18.4136,-49.2173],
  "Itupiranga_PA":[-5.1337,-49.3322],
  "Jaboatão dos Guararapes_PE":[-8.1752,-34.9469],
  "Jaboticabal_SP":[-21.252,-48.3252],
  "Jacareí_SP":[-23.3051,-45.9723],
  "Jaguariúna_SP":[-22.7037,-46.9851],
  "Jales_SP":[-20.2672,-50.5492],
  "Japurá_PR":[-23.4693,-52.5557],
  "Jeriquara_SP":[-20.3105,-47.5916],
  "Ji-Paraná_RO":[-10.8778,-61.9278],
  "Joaçaba_SC":[-27.1737,-51.5065],
  "José Bonifácio_SP":[-21.0551,-49.6892],
  "João Neiva_ES":[-19.757,-40.3857],
  "João Pessoa_PB":[-7.1216,-34.882],
  "Juiz de Fora_MG":[-21.761,-43.3501],
  "Jussara_GO":[-15.8748,-50.8674],
  "Lages_SC":[-27.8166,-50.3259],
  "Lagoa Santa_MG":[-19.6357,-43.8966],
  "Lajeado_RS":[-29.4672,-51.9624],
  "Lajedo_PE":[-8.6579,-36.3293],
  "Lambari_MG":[-21.9754,-45.3505],
  "Lauro de Freitas_BA":[-12.8924,-38.3128],
  "Lavras da Mangabeira_CE":[-6.752,-38.9634],
  "Lavras_MG":[-21.2426,-44.9992],
  "Leme_SP":[-22.1845,-47.3853],
  "Limeira_SP":[-22.5615,-47.4018],
  "Limoeiro do Norte_CE":[-5.1456,-38.0985],
  "Londrina_PR":[-23.4761,-51.1179],
  "Louveira_SP":[-23.0864,-46.9506],
  "Luziânia_GO":[-16.2535,-47.95],
  "Luís Eduardo Magalhães_BA":[-12.0869,-45.7834],
  "Macau_RN":[-5.1131,-36.6351],
  "Malacacheta_MG":[-17.8428,-42.0786],
  "Mallet_PR":[-25.8829,-50.8289],
  "Mandaguari_PR":[-23.5225,-51.6788],
  "Mara Rosa_GO":[-14.0148,-49.1777],
  "Marabá_PA":[-5.3463,-49.1007],
  "Maracanaú_CE":[-3.8779,-38.6248],
  "Marau_RS":[-28.4493,-52.2002],
  "Marechal Deodoro_AL":[-9.7097,-35.8967],
  "Maringá_PR":[-23.4253,-51.9382],
  "Marília_SP":[-22.2172,-49.95],
  "Matelândia_PR":[-25.2404,-53.9835],
  "Mauriti_CE":[-7.4239,-38.73],
  "Mesquita_RJ":[-22.7831,-43.4294],
  "Miguelópolis_SP":[-20.1796,-48.031],
  "Mineiros_GO":[-17.5654,-52.5537],
  "Mogi Guaçu_SP":[-22.3722,-46.9425],
  "Mogi Mirim_SP":[-22.4331,-46.9582],
  "Mombaça_CE":[-5.7451,-39.6294],
  "Montauri_RS":[-28.6502,-52.0758],
  "Monte Alegre_RN":[-6.0699,-35.3336],
  "Montenegro_RS":[-29.6826,-51.4687],
  "Mortugaba_BA":[-15.0226,-42.3693],
  "Naviraí_MS":[-23.0622,-54.2018],
  "Nova Aurora_PR":[-24.5282,-53.2577],
  "Nova Iguaçu_RJ":[-22.6956,-43.4654],
  "Nova Lima_MG":[-19.9854,-43.8471],
  "Nova Santa Rosa_PR":[-24.4681,-53.9548],
  "Nova Trento_SC":[-27.2863,-48.9303],
  "Novo Hamburgo_RS":[-29.6906,-51.1429],
  "Novo Horizonte_SP":[-21.4675,-49.2235],
  "Não-Me-Toque_RS":[-28.4576,-52.8197],
  "Olinda_PE":[-7.9986,-34.846],
  "Orizona_GO":[-17.0334,-48.2964],
  "Orobó_PE":[-7.7456,-35.6019],
  "Osasco_SP":[-23.5325,-46.7917],
  "Osório_RS":[-29.8891,-50.274],
  "Palhoça_SC":[-27.6448,-48.6646],
  "Palmares_PE":[-8.6841,-35.589],
  "Palmeira dos Índios_AL":[-9.4076,-36.6324],
  "Palotina_PR":[-24.284,-53.8405],
  "Paranatinga_MT":[-14.4298,-54.0503],
  "Paraíso do Tocantins_TO":[-10.1752,-48.8868],
  "Parelhas_RN":[-6.6914,-36.6584],
  "Parnamirim_RN":[-5.9153,-35.268],
  "Parnaíba_PI":[-2.9148,-41.7662],
  "Passira_PE":[-7.9763,-35.5817],
  "Passo Fundo_RS":[-28.2551,-52.3967],
  "Patos_PB":[-7.0258,-37.2767],
  "Patrocínio_MG":[-18.9408,-46.9927],
  "Paulo Afonso_BA":[-9.3999,-38.2173],
  "Paço do Lumiar_MA":[-2.5329,-44.1592],
  "Pedro Canário_ES":[-18.2993,-39.955],
  "Pelotas_RS":[-31.77,-52.341],
  "Pesqueira_PE":[-8.3574,-36.6968],
  "Pilão Arcado_BA":[-9.9543,-43.0005],
  "Piracuruca_PI":[-3.9305,-41.715],
  "Piripiri_PI":[-4.2732,-41.7785],
  "Pitangui_MG":[-19.6822,-44.8906],
  "Piên_PR":[-26.0989,-49.4298],
  "Pombal_PB":[-6.7711,-37.7989],
  "Ponta Grossa_PR":[-25.0892,-50.1602],
  "Porto Alegre_RS":[-30.0325,-51.2304],
  "Porto Seguro_BA":[-16.4435,-39.0643],
  "Porto Velho_RO":[-8.7495,-63.8735],
  "Portão_RS":[-29.6933,-51.2332],
  "Pouso Alegre_MG":[-22.2344,-45.9327],
  "Presidente Venceslau_SP":[-21.8771,-51.8451],
  "Quedas do Iguaçu_PR":[-25.453,-52.909],
  "Quirinópolis_GO":[-18.4472,-50.4547],
  "Quixadá_CE":[-4.9161,-39.0294],
  "Redenção_PA":[-8.0299,-50.031],
  "Ribeirão Preto_SP":[-21.1776,-47.8101],
  "Rio Azul_PR":[-25.7266,-50.7905],
  "Rio Claro_SP":[-22.41,-47.5604],
  "Rio Negrinho_SC":[-26.2591,-49.5177],
  "Rio Novo do Sul_ES":[-20.8641,-40.9384],
  "Rio de Janeiro_RJ":[-22.911,-43.2094],
  "Rio do Sul_SC":[-27.2163,-49.6437],
  "Salinas_MG":[-16.1701,-42.2897],
  "Salto_SP":[-23.199,-47.2914],
  "Salvador_BA":[-12.9822,-38.4813],
  "Sananduva_RS":[-27.9499,-51.8074],
  "Santa Bárbara d'Oeste_SP":[-22.7543,-47.4138],
  "Santa Maria_RS":[-29.6861,-53.8069],
  "Santa Rita do Sapucaí_MG":[-22.2487,-45.7065],
  "Santa Rosa_RS":[-27.8644,-54.4779],
  "Santa Terezinha_SC":[-26.7826,-50.0059],
  "Santaluz_BA":[-11.2505,-39.3747],
  "Santana de Parnaíba_SP":[-23.4447,-46.9168],
  "Santo André_SP":[-23.6534,-46.5279],
  "Santo Antônio de Jesus_BA":[-12.9689,-39.2609],
  "Sapiranga_RS":[-29.6392,-51.0069],
  "Sarandi_RS":[-27.942,-52.9231],
  "Sardoá_MG":[-18.7817,-42.3653],
  "Saudades_SC":[-26.9262,-53.0047],
  "Senador Canedo_GO":[-16.7013,-49.0915],
  "Senhor do Bonfim_BA":[-10.4603,-40.1892],
  "Serra Branca_PB":[-7.4815,-36.6635],
  "Serra Talhada_PE":[-7.9868,-38.292],
  "Serra_ES":[-20.1253,-40.3064],
  "Sertão Santana_RS":[-30.4617,-51.6042],
  "Sertãozinho_SP":[-21.1376,-47.9914],
  "Sete Lagoas_MG":[-19.4661,-44.2469],
  "Sidrolândia_MS":[-20.9361,-54.964],
  "Sinop_MT":[-11.8577,-55.4968],
  "Sombrio_SC":[-29.108,-49.6328],
  "Sorriso_MT":[-12.5445,-55.7234],
  "Sumaré_SP":[-22.8218,-47.2671],
  "São Bento do Sul_SC":[-26.2484,-49.3821],
  "São Bento_PB":[-6.4859,-37.4469],
  "São Bonifácio_SC":[-27.9009,-48.9326],
  "São Carlos_SP":[-22.018,-47.8912],
  "São Gabriel do Oeste_MS":[-19.3945,-54.5755],
  "São Gonçalo_RJ":[-22.8219,-43.0309],
  "São Joaquim da Barra_SP":[-20.5815,-47.8608],
  "São Joaquim de Bicas_MG":[-20.0489,-44.2732],
  "São José de Ribamar_MA":[-2.5609,-44.056],
  "São José do Egito_PE":[-7.4698,-37.2746],
  "São José do Rio Preto_SP":[-20.8126,-49.3804],
  "São José dos Campos_SP":[-23.1868,-45.8855],
  "São João Batista do Glória_MG":[-20.6414,-46.5053],
  "São João Batista_SC":[-27.2775,-48.8496],
  "São João da Boa Vista_SP":[-21.9687,-46.7969],
  "São João del Rei_MG":[-21.1336,-44.2588],
  "São Luís de Montes Belos_GO":[-16.5211,-50.3726],
  "São Luís_MA":[-2.5295,-44.2964],
  "São Manuel_SP":[-22.7321,-48.5723],
  "São Marcos_RS":[-28.9707,-51.0688],
  "São Mateus_ES":[-18.7146,-39.8539],
  "São Miguel do Oeste_SC":[-26.7279,-53.5177],
  "São Sebastião do Caí_RS":[-29.5912,-51.3779],
  "Tanguá_RJ":[-22.7354,-42.7202],
  "Tanhaçu_BA":[-14.0197,-41.2473],
  "Tanque Novo_BA":[-13.5474,-42.4908],
  "Tapejara_RS":[-28.0692,-52.0117],
  "Taquara_RS":[-29.6452,-50.7832],
  "Taquari_RS":[-29.7942,-51.8648],
  "Taquaritinga_SP":[-21.4064,-48.5056],
  "Tatuí_SP":[-23.349,-47.849],
  "Teixeira de Freitas_BA":[-17.5385,-39.7452],
  "Tenente Portela_RS":[-27.3711,-53.7585],
  "Teofilo Otoni_MG":[-17.8579,-41.5082],
  "Teresina_PI":[-5.0875,-42.805],
  "Teresópolis_RJ":[-22.2978,-42.8646],
  "Terra de Areia_RS":[-29.5789,-50.0634],
  "Tietê_SP":[-23.103,-47.7148],
  "Toledo_PR":[-24.7222,-53.7402],
  "Tomé-Açu_PA":[-2.4166,-48.1523],
  "Treviso_SC":[-28.5154,-49.4582],
  "Trizidela do Vale_MA":[-4.5695,-44.6144],
  "Três Lagoas_MS":[-20.7867,-51.7061],
  "Tupã_SP":[-21.9349,-50.5141],
  "Turvo_SC":[-28.9277,-49.6792],
  "Uberaba_MG":[-19.7508,-47.9367],
  "Ubiratã_PR":[-24.5427,-52.99],
  "Ubá_MG":[-21.12,-42.9428],
  "Umuarama_PR":[-23.7621,-53.3116],
  "Unaí_MG":[-16.3629,-46.8924],
  "União_PI":[-4.5893,-42.8593],
  "Uruaçu_GO":[-14.5244,-49.151],
  "Urupês_SP":[-21.2027,-49.2922],
  "Valinhos_SP":[-22.9706,-46.9958],
  "Varginha_MG":[-21.5566,-45.4341],
  "Vassouras_RJ":[-22.3706,-43.5923],
  "Veranópolis_RS":[-28.9351,-51.5519],
  "Vertentes_PE":[-7.9061,-35.9895],
  "Verê_PR":[-25.8812,-52.9082],
  "Videira_SC":[-27.0054,-51.1534],
  "Vila Velha_ES":[-20.3297,-40.292],
  "Vinhedo_SP":[-23.0299,-46.975],
  "Vista Alegre do Alto_SP":[-21.1713,-48.6299],
  "Vitória_ES":[-20.3201,-40.3377],
  "Volta Redonda_RJ":[-22.5235,-44.0902],
  "Votorantim_SP":[-23.5381,-47.4422],
  "Votuporanga_SP":[-20.4253,-49.972],
  "Wenceslau Braz_PR":[-23.8749,-49.8036],
  "Xanxerê_SC":[-26.881,-52.3847],
  "Xique-Xique_BA":[-10.9069,-42.7547]
};

/* ── REGIONS ─────────────────────────────────────────── */
const REGIONS = {
  'Norte':        ['AC', 'AM', 'AP', 'PA', 'RO', 'RR', 'TO'],
  'Nordeste':     ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
  'Centro-Oeste': ['DF', 'GO', 'MS', 'MT'],
  'Sudeste':      ['ES', 'MG', 'RJ', 'SP'],
  'Sul':          ['PR', 'RS', 'SC'],
};
const REGION_ORDER = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];

function stateRegion(uf) {
  for (const [r, ufs] of Object.entries(REGIONS)) {
    if (ufs.includes(uf)) return r;
  }
  return 'Outros';
}

/* ── STATE ───────────────────────────────────────────── */
let map, burnCluster, burnPlusCluster, othersCluster;
let allMarkers = [];
let allData = [];
let marketData = null;
let activeFilters = new Set(['outros', 'burn', 'burnplus']);
let treeQuery = '';
let activePlanFilter = null;
let extrasData = {};

/* ── TILES ───────────────────────────────────────────── */
// We use a single OSM tile layer and invert it via CSS for dark mode.
// This avoids issues with CartoDB dark_matter tile availability.
const TILE_URL  = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
let tileLayer;

/* ── INIT MAP ────────────────────────────────────────── */
function initMap() {
  map = L.map('map', {
    center: [-15.5, -47.5],
    zoom: 5,
    zoomControl: true,
  });

  tileLayer = L.tileLayer(TILE_URL, {
    attribution: TILE_ATTR,
    maxZoom: 19,
  }).addTo(map);

  burnCluster    = L.layerGroup();
  burnPlusCluster = L.layerGroup();
  othersCluster  = L.layerGroup();
}

/* ── MARKERS ─────────────────────────────────────────── */
function pinIcon(plano, highlight = false) {
  const isBp   = plano === 'Combo - Plano Burn+';
  const isBurn = plano === 'Combo - Plano Burn';
  const fill   = isBp ? '#8B5CF6' : isBurn ? '#F97316' : '#6B7280';
  const ring  = highlight ? `box-shadow:0 0 0 4px ${fill}55,0 2px 8px rgba(0,0,0,.5)` : 'box-shadow:0 1px 4px rgba(0,0,0,.5)';
  const size  = highlight ? 20 : 14;
  return L.divIcon({
    html: `<div style="
      width:${size}px;height:${size}px;
      background:${fill};
      border:2.5px solid #fff;
      border-radius:50%;
      ${ring};
    "></div>`,
    className: '',
    iconSize:   [size, size],
    iconAnchor: [size/2, size/2],
  });
}

function buildMarkers(data) {
  burnCluster.clearLayers();
  burnPlusCluster.clearLayers();
  othersCluster.clearLayers();
  allMarkers = [];

  data.forEach(d => {
    const key = `${d.cidade}_${d.estado}`;
    const c = COORDS[key];
    if (!c) return;

    const jit = () => (Math.random() - .5) * .07;
    const marker = L.marker([c[0] + jit(), c[1] + jit()], {
      icon: pinIcon(d.plano),
    });

    const isBp    = d.plano === 'Combo - Plano Burn+';
    const isBurn  = d.plano === 'Combo - Plano Burn';
    const badgeCls = isBp ? 'badge badge-burnp' : isBurn ? 'badge badge-burn' : 'badge badge-other';
    const badgeTxt = isBp ? '⚡ Burn+' : isBurn ? '🔥 Burn' : 'Outros';

    marker.bindPopup(`
      <div class="popup-body">
        <div class="popup-badge"><span class="${badgeCls}">${badgeTxt}</span></div>
        <div class="popup-name">#${d.id} — ${d.nome}</div>
        <div class="popup-loc">📍 ${d.cidade} — ${d.estado}</div>
        <button class="popup-btn" onclick="openDetail(${d.id})">Ver detalhes →</button>
      </div>
    `, { maxWidth: 250, closeButton: true });

    marker.on('click', () => openDetail(d.id));
    marker._did  = d.id;
    marker._plan = d.plano;
    marker._city = d.cidade.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

    if (isBp) {
      burnPlusCluster.addLayer(marker);
    } else if (d.plano === 'Combo - Plano Burn') {
      burnCluster.addLayer(marker);
    } else {
      othersCluster.addLayer(marker);
    }

    allMarkers.push(marker);
  });

  applyFilter();
}

/* ── FILTER ──────────────────────────────────────────── */
function applyFilter() {
  if (activePlanFilter !== null) {
    if (!map.hasLayer(burnCluster))     map.addLayer(burnCluster);
    if (!map.hasLayer(burnPlusCluster)) map.addLayer(burnPlusCluster);
    if (!map.hasLayer(othersCluster))   map.addLayer(othersCluster);
    document.getElementById('sv').textContent = allMarkers.length;
    renderTree();
    return;
  }

  const showBurn   = activeFilters.has('burn');
  const showBurnP  = activeFilters.has('burnplus');
  const showOthers = activeFilters.has('outros');

  if (showBurn)   { if (!map.hasLayer(burnCluster))     map.addLayer(burnCluster); }
  else            { if (map.hasLayer(burnCluster))      map.removeLayer(burnCluster); }

  if (showBurnP)  { if (!map.hasLayer(burnPlusCluster)) map.addLayer(burnPlusCluster); }
  else            { if (map.hasLayer(burnPlusCluster))  map.removeLayer(burnPlusCluster); }

  if (showOthers) { if (!map.hasLayer(othersCluster))   map.addLayer(othersCluster); }
  else            { if (map.hasLayer(othersCluster))    map.removeLayer(othersCluster); }

  const visible = allMarkers.filter(m =>
    (showBurn   && m._plan === 'Combo - Plano Burn')  ||
    (showBurnP  && m._plan === 'Combo - Plano Burn+') ||
    (showOthers && m._plan !== 'Combo - Plano Burn' && m._plan !== 'Combo - Plano Burn+')
  ).length;
  document.getElementById('sv').textContent = visible;
  renderTree();
}

/* ── DETAIL PANEL ────────────────────────────────────── */
function openDetail(id) {
  const d = allData.find(x => x.id === id);
  if (!d) return;
  const isBp   = d.plano === 'Combo - Plano Burn+';
  const isBurn = d.plano === 'Combo - Plano Burn';
  const badgeCls = isBp ? 'badge badge-burnp' : isBurn ? 'badge badge-burn' : 'badge badge-other';
  const badgeTxt = isBp ? '⚡ Combo - Plano Burn+' : isBurn ? '🔥 Combo - Plano Burn' : d.plano || 'Outro';

  const ext = extrasData[String(d.id)] || null;
  const extHtml = ext ? [
    ext.desempenhoJornada != null ? `<div class="info-row">
          <div class="info-ico">📊</div>
          <div class="info-content">
            <div class="info-lbl">Desempenho Jornada</div>
            <div class="info-val">${ext.desempenhoJornada}%</div>
          </div>
        </div>` : '',
    ext.usinas30d != null ? `<div class="info-row">
          <div class="info-ico">📈</div>
          <div class="info-content">
            <div class="info-lbl">Usinas instaladas (últ. 30d)</div>
            <div class="info-val">${fmtN(ext.usinas30d)}</div>
          </div>
        </div>` : '',
    ext.receita30d != null ? `<div class="info-row">
          <div class="info-ico">💰</div>
          <div class="info-content">
            <div class="info-lbl">Receita (últ. 30d)</div>
            <div class="info-val">${fmtBRL(ext.receita30d)}</div>
          </div>
        </div>` : '',
  ].join('') : '';

  document.getElementById('detail').innerHTML = `
    <div class="int-card">
      <div class="int-card-head">
        <h2><span class="int-id-prefix">#${d.id}</span> ${d.nome}</h2>
        <span class="${badgeCls}">${isBp ? 'Burn+' : isBurn ? 'Burn' : 'Outro'}</span>
      </div>
      <div class="int-card-body">
        <div class="info-row">
          <div class="info-ico">🏷️</div>
          <div class="info-content">
            <div class="info-lbl">Plano</div>
            <div class="info-val">${badgeTxt}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">📍</div>
          <div class="info-content">
            <div class="info-lbl">Cidade / Estado</div>
            <div class="info-val">${d.cidade} — ${d.estado}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">📅</div>
          <div class="info-content">
            <div class="info-lbl">Data de Criação</div>
            <div class="info-val">${fmtDate(d.createdAt)}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">👤</div>
          <div class="info-content">
            <div class="info-lbl">Consultor</div>
            <div class="info-val">${d.consultor || 'N/D'}</div>
          </div>
        </div>
        ${d.devComercial ? `<div class="info-row">
          <div class="info-ico">🚀</div>
          <div class="info-content">
            <div class="info-lbl">Dev. Comercial</div>
            <div class="info-val">${d.devComercial}</div>
          </div>
        </div>` : ''}
        <div class="info-row">
          <div class="info-ico">⚡</div>
          <div class="info-content">
            <div class="info-lbl">Total de Usinas</div>
            <div class="info-val">${fmtN(d.totalUsinas)}</div>
          </div>
        </div>
        <div class="info-row">
          <div class="info-ico">🔆</div>
          <div class="info-content">
            <div class="info-lbl">Potência Total</div>
            <div class="info-val">${fmtKwp(d.totalPotenciaKwp)}</div>
          </div>
        </div>
        ${extHtml}
      </div>
    </div>
  `;
}

/* ── UTILS ───────────────────────────────────────────── */
function fmtDate(s) {
  if (!s) return 'N/D';
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
}
function fmtN(v)   { return v != null ? Number(v).toLocaleString('pt-BR') : 'N/D'; }
function fmtKwp(v) { return v != null ? Number(v).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' kWp' : 'N/D'; }
function fmtBRL(v) { return 'R$ ' + Number(v || 0).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }

function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}
function normKey(cidade, uf) {
  return normalize(cidade) + '_' + uf;
}
function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── SEARCH ──────────────────────────────────────────── */
const cityInput = document.getElementById('city-input');
const clearBtn  = document.getElementById('search-clear');
const toast     = document.getElementById('city-toast');
let toastTimer;

cityInput.addEventListener('input', () => {
  clearBtn.style.display = cityInput.value ? 'block' : 'none';
});
cityInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
clearBtn.addEventListener('click', () => {
  cityInput.value = '';
  clearBtn.style.display = 'none';
  allMarkers.forEach(m => m.setIcon(pinIcon(m._plan, false)));
  hideToast();
});

function doSearch() {
  const q = normalize(cityInput.value.trim());
  if (!q) return;

  const showBurn   = activeFilters.has('burn');
  const showBurnP  = activeFilters.has('burnplus');
  const showOthers = activeFilters.has('outros');
  const matches = allMarkers.filter(m => {
    if (!m._city.includes(q)) return false;
    if (showBurn   && m._plan === 'Combo - Plano Burn')  return true;
    if (showBurnP  && m._plan === 'Combo - Plano Burn+') return true;
    if (showOthers && m._plan !== 'Combo - Plano Burn' && m._plan !== 'Combo - Plano Burn+') return true;
    return false;
  });

  // reset all icons
  allMarkers.forEach(m => m.setIcon(pinIcon(m._plan, false)));

  if (!matches.length) {
    // Try market data for this city
    if (marketData) {
      const mktMatches = Object.entries(marketData.cities)
        .filter(([k]) => k.split('_').slice(0, -1).join('_').includes(q));
      if (mktMatches.length) {
        mktMatches.sort((a, b) => (b[1].domicilios || 0) - (a[1].domicilios || 0));
        const mktCity = mktMatches[0][1];
        showMarketCityPanel(mktCity);
        const c = COORDS[`${mktCity.nome}_${mktCity.uf}`];
        if (c) map.setView(c, 11, { animate: true });
        showToast(`Dados de mercado: ${mktCity.nome} — ${mktCity.uf}`, false);
        return;
      }
    }
    showToast(`Nenhum resultado para "${cityInput.value}"`, true);
    return;
  }

  // highlight matched markers
  matches.forEach(m => m.setIcon(pinIcon(m._plan, true)));

  // pan to centroid
  const lats = matches.map(m => m.getLatLng().lat);
  const lngs = matches.map(m => m.getLatLng().lng);
  const lat  = lats.reduce((a, b) => a + b) / lats.length;
  const lng  = lngs.reduce((a, b) => a + b) / lngs.length;
  map.setView([lat, lng], matches.length === 1 ? 11 : 8, { animate: true });

  if (matches.length === 1) {
    openDetail(matches[0]._did);
    setTimeout(() => matches[0].openPopup(), 500);
  }

  const parts = [];
  if (activeFilters.has('burn'))     parts.push('Burn');
  if (activeFilters.has('burnplus')) parts.push('Burn+');
  if (activeFilters.has('outros'))    parts.push('Outros');
  const label = parts.length < 3 ? ` (${parts.join(', ')})` : '';
  showToast(`${matches.length} integrador${matches.length > 1 ? 'es' : ''} em "${cityInput.value}"${label}`, false);
}

function showToast(msg, err) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.style.borderColor = err ? '#EF4444' : '#F97316';
  toast.style.display = 'block';
  toastTimer = setTimeout(hideToast, 4000);
}
function hideToast() { toast.style.display = 'none'; }

/* ── FILTER BUTTONS ──────────────────────────────────── */
document.querySelectorAll('.btn-f').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.f;
    if (activeFilters.has(f)) {
      activeFilters.delete(f);
      btn.classList.remove('active');
    } else {
      activeFilters.add(f);
      btn.classList.add('active');
    }
    applyFilter();
    resetDetail();
    allMarkers.forEach(m => m.setIcon(pinIcon(m._plan, false)));
  });
});

/* ── TREE SEARCH ─────────────────────────────────────── */
const treeSearchInput = document.getElementById('tree-search');
const treeSearchClear = document.getElementById('tree-search-clear');

treeSearchInput.addEventListener('input', () => {
  treeQuery = normalize(treeSearchInput.value.trim());
  treeSearchClear.style.display = treeSearchInput.value ? 'block' : 'none';
  renderTree();
});

treeSearchClear.addEventListener('click', () => {
  treeSearchInput.value = '';
  treeSearchClear.style.display = 'none';
  treeQuery = '';
  renderTree();
});

function resetDetail() {
  if (!marketData || !allData.length) {
    document.getElementById('detail').innerHTML = `
      <div class="empty-state" id="empty">
        <div class="empty-ico">📍</div>
        <p>Clique em um marcador<br>para ver os detalhes.</p>
      </div>`;
    return;
  }

  // SolarZ totals per region
  const szByRegion = {};
  allData.forEach(d => {
    const r = stateRegion(d.estado);
    if (!szByRegion[r]) szByRegion[r] = { count: 0, usinas: 0 };
    szByRegion[r].count++;
    szByRegion[r].usinas += d.totalUsinas || 0;
  });

  let html = `<div class="ov-wrap"><div class="ov-title">Panorama do Mercado Solar</div>`;
  REGION_ORDER.forEach(reg => {
    const sz = szByRegion[reg] || { count: 0, usinas: 0 };
    const mk = marketData.regions[reg] || {};
    html += `<div class="ov-card">
      <div class="ov-reg-name">${reg}</div>
      <div class="ov-divider"></div>
      <div class="ov-grid">
        <span class="ov-lbl ov-lbl-sz">SolarZ</span>
        <div class="ov-num"><strong>${fmtN(sz.count)}</strong><span>Integr.</span></div>
        <div class="ov-num"><strong>${fmtN(sz.usinas)}</strong><span>Usinas</span></div>
        ${mk.domicilios ? `<span class="ov-lbl ov-lbl-mk">Brasil</span>
        <div class="ov-num"><strong>${fmtN(mk.usinas||0)}</strong><span>Usinas</span></div>
        <div class="ov-num"><strong>${fmtN(mk.domicilios)}</strong><span>Domicílios</span></div>` : ''}
      </div>
    </div>`;
  });
  html += '</div>';
  document.getElementById('detail').innerHTML = html;
}

function showMarketCityPanel(mktCity) {
  const nome = esc(mktCity.nome || '');
  const uf   = esc(mktCity.uf   || '');
  document.getElementById('detail').innerHTML = `
    <div class="mkt-city-card">
      <div class="mkt-city-head">
        <h2>${nome} — ${uf}</h2>
        <span class="badge badge-mkt">Mercado</span>
      </div>
      <div class="mkt-no-sz">Sem integradores SolarZ nesta cidade</div>
      <div class="int-card-body">
        ${mktCity.usinas != null ? `<div class="info-row">
          <div class="info-ico">⚡</div>
          <div class="info-content">
            <div class="info-lbl">Usinas instaladas (Brasil)</div>
            <div class="info-val">${fmtN(mktCity.usinas)}</div>
          </div>
        </div>` : ''}
        ${mktCity.potKw != null ? `<div class="info-row">
          <div class="info-ico">🔆</div>
          <div class="info-content">
            <div class="info-lbl">Potência instalada</div>
            <div class="info-val">${fmtN(Math.round(mktCity.potKw))} kW</div>
          </div>
        </div>` : ''}
        ${mktCity.domicilios != null ? `<div class="info-row">
          <div class="info-ico">🏠</div>
          <div class="info-content">
            <div class="info-lbl">Domicílios ocupados</div>
            <div class="info-val">${fmtN(mktCity.domicilios)}</div>
          </div>
        </div>` : ''}
      </div>
    </div>`;
}

/* ── THEME ───────────────────────────────────────────── */
document.getElementById('theme-btn').addEventListener('click', () => {
  const isDark = document.body.dataset.theme === 'dark';
  document.body.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('theme-btn').textContent = isDark ? '🌙' : '☀️';
});

/* ── TREE PANEL ──────────────────────────────────────── */
function renderTree() {
  const isSearching = treeQuery.length > 0;
  const q = normalize(treeQuery);

  const filtered = allData.filter(d => {
    if (activePlanFilter !== null) {
      if (d.plano !== activePlanFilter) return false;
      return !isSearching || normalize(d.nome).includes(q) || normalize(d.cidade).includes(q);
    }
    if (d.plano === 'Combo - Plano Burn+') { if (!activeFilters.has('burnplus')) return false; }
    else if (d.plano === 'Combo - Plano Burn') { if (!activeFilters.has('burn')) return false; }
    else { if (!activeFilters.has('outros')) return false; }
    if (isSearching) {
      return normalize(d.nome).includes(q) || normalize(d.cidade).includes(q);
    }
    return true;
  });

  const byRegion = {};
  filtered.forEach(d => {
    const r = stateRegion(d.estado);
    if (!byRegion[r]) byRegion[r] = {};
    if (!byRegion[r][d.estado]) byRegion[r][d.estado] = {};
    if (!byRegion[r][d.estado][d.cidade]) byRegion[r][d.estado][d.cidade] = [];
    byRegion[r][d.estado][d.cidade].push(d);
  });

  function sumStats(items) {
    return {
      count:  items.length,
      usinas: items.reduce((s, x) => s + (x.totalUsinas || 0), 0),
      kwp:    items.reduce((s, x) => s + (x.totalPotenciaKwp || 0), 0),
    };
  }

  const open  = isSearching ? ' style="display:block"' : '';
  const caret = isSearching ? '▼' : '▶';
  const rowCls = isSearching ? ' t-open' : '';

  let html = '';
  REGION_ORDER.forEach(region => {
    if (!byRegion[region]) return;
    const states = byRegion[region];
    const allItems = Object.values(states).flatMap(c => Object.values(c).flat());
    const rs = sumStats(allItems);
    const mktR = marketData ? (marketData.regions[region] || {}) : {};

    html += `<div class="t-block t-region">
      <div class="t-row${rowCls}" onclick="tToggle(this)">
        <span class="t-caret">${caret}</span>
        <div class="t-info">
          <div class="t-name">${esc(region)} <span class="t-cnt">${rs.count}</span></div>
          <div class="t-meta">${fmtN(rs.usinas)} usinas &nbsp;·&nbsp; ${fmtKwp(rs.kwp)}</div>
          ${mktR.domicilios != null ? `<div class="t-mkt">${fmtN(mktR.usinas||0)} usinas &nbsp;·&nbsp; ${fmtN(mktR.domicilios)} dom. Brasil</div>` : ''}
        </div>
      </div>
      <div class="t-kids"${open}>`;

    Object.keys(states).sort((a, b) =>
      Object.values(states[b]).flat().length - Object.values(states[a]).flat().length
    ).forEach(uf => {
      const cities = states[uf];
      const stateItems = Object.values(cities).flat();
      const ss = sumStats(stateItems);
      const mktS = marketData ? (marketData.states[uf] || {}) : {};

      html += `<div class="t-block t-state">
        <div class="t-row${rowCls}" data-uf="${esc(uf)}" onclick="tState(this)">
          <span class="t-caret">${caret}</span>
          <div class="t-info">
            <div class="t-name">${esc(uf)} <span class="t-cnt">${ss.count}</span></div>
            <div class="t-meta">${fmtN(ss.usinas)} usinas &nbsp;·&nbsp; ${fmtKwp(ss.kwp)}</div>
            ${mktS.domicilios != null ? `<div class="t-mkt">${fmtN(mktS.usinas||0)} usinas &nbsp;·&nbsp; ${fmtN(mktS.domicilios)} dom. Brasil</div>` : ''}
          </div>
        </div>
        <div class="t-kids"${open}>`;

      Object.keys(cities).sort((a, b) =>
        a.localeCompare(b, 'pt-BR')
      ).forEach(city => {
        const companies = cities[city];
        const cs = sumStats(companies);
        const mktC = marketData ? (marketData.cities[normKey(city, uf)] || {}) : {};

        if (!isSearching) {
          html += `<div class="t-block t-city">
            <div class="t-row" data-city="${esc(city)}" data-uf="${esc(uf)}" onclick="tCity(this)">
              <div class="t-info">
                <div class="t-name">${esc(city)} <span class="t-cnt">${cs.count}</span></div>
                <div class="t-meta">${fmtN(cs.usinas)} usinas &nbsp;·&nbsp; ${fmtKwp(cs.kwp)}</div>
                ${mktC.domicilios != null ? `<div class="t-mkt">${fmtN(mktC.usinas||0)} usinas &nbsp;·&nbsp; ${fmtN(mktC.domicilios)} dom. Brasil</div>` : ''}
              </div>
              <span class="t-panel-arrow">›</span>
            </div>
          </div>`;
        } else {
          html += `<div class="t-block t-city">
            <div class="t-row t-open" data-city="${esc(city)}" data-uf="${esc(uf)}" onclick="tCity(this)">
              <span class="t-caret">▼</span>
              <div class="t-info">
                <div class="t-name">${esc(city)} <span class="t-cnt">${cs.count}</span></div>
                <div class="t-meta">${fmtN(cs.usinas)} usinas &nbsp;·&nbsp; ${fmtKwp(cs.kwp)}</div>
                ${mktC.domicilios != null ? `<div class="t-mkt">${fmtN(mktC.usinas||0)} usinas &nbsp;·&nbsp; ${fmtN(mktC.domicilios)} dom. Brasil</div>` : ''}
              </div>
            </div>
            <div class="t-kids" style="display:block">`;

          companies.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(d => {
            const isBp   = d.plano === 'Combo - Plano Burn+';
            const isBurn = d.plano === 'Combo - Plano Burn';
            const dotColor = isBp ? '#8B5CF6' : isBurn ? '#F97316' : '#6B7280';
            html += `<div class="t-row t-company" onclick="treeOpenDetail(${d.id})">
              <span class="t-dot" style="background:${dotColor}"></span>
              <div class="t-info">
                <div class="t-name"><span class="t-id-prefix">#${d.id}</span> ${esc(d.nome)}</div>
                <div class="t-meta">${fmtN(d.totalUsinas)} usinas &nbsp;·&nbsp; ${fmtKwp(d.totalPotenciaKwp)}</div>
              </div>
            </div>`;
          });

          html += `</div></div>`;
        }
      });

      html += `</div></div>`;
    });

    html += `</div></div>`;
  });

  document.getElementById('tree-content').innerHTML =
    html || '<div style="padding:16px;color:var(--text3);font-size:13px;text-align:center">Sem dados</div>';
}

function tToggle(row) {
  const kids = row.nextElementSibling;
  if (!kids) return;
  const open = kids.style.display === 'block';
  kids.style.display = open ? 'none' : 'block';
  const caret = row.querySelector('.t-caret');
  if (caret) caret.textContent = open ? '▶' : '▼';
  row.classList.toggle('t-open', !open);
}

function tCity(row) {
  const city = row.dataset.city;
  const uf   = row.dataset.uf;

  if (treeQuery) {
    tToggle(row);
  } else {
    showCityPanel(city, uf);
  }

  const c = COORDS[`${city}_${uf}`];
  if (c) map.setView([c[0], c[1]], 11, { animate: true });
}

function showCityContext(city, uf) {
  const companies = allData.filter(d => d.cidade === city && d.estado === uf);
  const sz = {
    count:  companies.length,
    usinas: companies.reduce((s, d) => s + (d.totalUsinas || 0), 0),
    kwp:    companies.reduce((s, d) => s + (d.totalPotenciaKwp || 0), 0),
  };
  const mktC = marketData ? (marketData.cities[normKey(city, uf)] || {}) : {};

  document.getElementById('detail').innerHTML = `
    <div class="ov-wrap">
      <div class="ov-ctx-head">
        <button class="ov-back" onclick="resetDetail();closeCityPanel()">← Panorama</button>
        <span class="ov-ctx-title">${esc(city)} — ${esc(uf)}</span>
      </div>
      <div class="ov-card">
        <div class="ov-grid">
          <span class="ov-lbl ov-lbl-sz">SolarZ</span>
          <div class="ov-num"><strong>${fmtN(sz.count)}</strong><span>Integr.</span></div>
          <div class="ov-num"><strong>${fmtN(sz.usinas)}</strong><span>Usinas</span></div>
          ${mktC.domicilios != null ? `<span class="ov-lbl ov-lbl-mk">Brasil</span>
          <div class="ov-num"><strong>${fmtN(mktC.usinas||0)}</strong><span>Usinas</span></div>
          <div class="ov-num"><strong>${fmtN(mktC.domicilios)}</strong><span>Domicílios</span></div>` : ''}
        </div>
      </div>
    </div>`;
}

function showStateContext(uf) {
  const companies = allData.filter(d => d.estado === uf);
  const sz = {
    count:  companies.length,
    usinas: companies.reduce((s, d) => s + (d.totalUsinas || 0), 0),
    kwp:    companies.reduce((s, d) => s + (d.totalPotenciaKwp || 0), 0),
  };
  const mktS = marketData ? (marketData.states[uf] || {}) : {};

  document.getElementById('detail').innerHTML = `
    <div class="ov-wrap">
      <div class="ov-ctx-head">
        <button class="ov-back" onclick="resetDetail()">← Panorama</button>
        <span class="ov-ctx-title">${esc(uf)}</span>
      </div>
      <div class="ov-card">
        <div class="ov-grid">
          <span class="ov-lbl ov-lbl-sz">SolarZ</span>
          <div class="ov-num"><strong>${fmtN(sz.count)}</strong><span>Integr.</span></div>
          <div class="ov-num"><strong>${fmtN(sz.usinas)}</strong><span>Usinas</span></div>
          ${mktS.domicilios != null ? `<span class="ov-lbl ov-lbl-mk">Brasil</span>
          <div class="ov-num"><strong>${fmtN(mktS.usinas||0)}</strong><span>Usinas</span></div>
          <div class="ov-num"><strong>${fmtN(mktS.domicilios)}</strong><span>Domicílios</span></div>` : ''}
        </div>
      </div>
    </div>`;
}

function renderIntegradorCard(d) {
  const planList = (d.planos && d.planos.length) ? d.planos : [d.plano || 'Sem plano'];
  const badgesHtml = planList.map(p => {
    const bp   = p === 'Combo - Plano Burn+';
    const burn = p === 'Combo - Plano Burn';
    const cls  = bp ? 'badge badge-burnp' : burn ? 'badge badge-burn' : 'badge badge-other';
    const txt  = bp ? '⚡ Burn+' : burn ? '🔥 Burn' : esc(p);
    return `<span class="${cls}">${txt}</span>`;
  }).join('');
  const ex = extrasData[String(d.id)];
  return `<div class="ci-card" onclick="treeOpenDetail(${d.id})">
    <div class="ci-card-badge">${badgesHtml}</div>
    <div class="ci-card-name"><span class="ci-card-id">#${d.id}</span>${esc(d.nome)}</div>
    <div class="ci-card-stats">
      <div class="ci-stat"><span class="ci-stat-val">${fmtN(d.totalUsinas || 0)}</span><span class="ci-stat-lbl">usinas</span></div>
      <div class="ci-stat"><span class="ci-stat-val">${fmtKwp(d.totalPotenciaKwp || 0)}</span><span class="ci-stat-lbl">potência</span></div>
      ${ex && ex.usinas30d  != null ? `<div class="ci-stat"><span class="ci-stat-val ci-stat-accent">${fmtN(ex.usinas30d)}</span><span class="ci-stat-lbl">usinas +30d</span></div>` : ''}
      ${ex && ex.receita30d != null ? `<div class="ci-stat"><span class="ci-stat-val ci-stat-accent">${fmtBRL(ex.receita30d)}</span><span class="ci-stat-lbl">receita 30d</span></div>` : ''}
    </div>
  </div>`;
}

function filterCompanies(predicate) {
  return allData.filter(d => {
    if (!predicate(d)) return false;
    if (activePlanFilter !== null) return d.plano === activePlanFilter;
    if (d.plano === 'Combo - Plano Burn+') return activeFilters.has('burnplus');
    if (d.plano === 'Combo - Plano Burn')  return activeFilters.has('burn');
    return activeFilters.has('outros');
  }).sort((a, b) => {
    const ra = extrasData[String(a.id)]?.receita30d ?? -1;
    const rb = extrasData[String(b.id)]?.receita30d ?? -1;
    if (rb !== ra) return rb - ra;
    return a.nome.localeCompare(b.nome, 'pt-BR');
  });
}

function openCardsPanel(title, companies) {
  document.getElementById('city-panel-title').textContent = title;
  document.getElementById('city-panel-cards').innerHTML = companies.map(renderIntegradorCard).join('');
  document.getElementById('city-panel').classList.add('visible');
}

function showCityPanel(city, uf) {
  document.querySelectorAll('.t-city > .t-row').forEach(r => r.classList.remove('t-selected'));
  document.querySelectorAll('.t-city > .t-row').forEach(r => {
    if (r.dataset.city === city && r.dataset.uf === uf) r.classList.add('t-selected');
  });
  showCityContext(city, uf);
  const companies = filterCompanies(d => d.cidade === city && d.estado === uf);
  openCardsPanel(`${city} — ${uf}  ·  ${companies.length} integrador${companies.length !== 1 ? 'es' : ''}`, companies);
}

function showStatePanelCards(uf) {
  document.querySelectorAll('.t-city > .t-row.t-selected').forEach(r => r.classList.remove('t-selected'));
  const companies = filterCompanies(d => d.estado === uf);
  openCardsPanel(`${uf}  ·  ${companies.length} integrador${companies.length !== 1 ? 'es' : ''}`, companies);
}

function closeCityPanel() {
  document.getElementById('city-panel').classList.remove('visible');
  document.querySelectorAll('.t-city > .t-row.t-selected').forEach(r => r.classList.remove('t-selected'));
  resetDetail();
}

function tState(row) {
  const wasOpen = row.classList.contains('t-open');
  tToggle(row);
  const uf = row.dataset.uf;
  if (!wasOpen && uf) {
    document.getElementById('city-panel').classList.remove('visible');
    document.querySelectorAll('.t-city > .t-row.t-selected').forEach(r => r.classList.remove('t-selected'));
    showStateContext(uf);
    showStatePanelCards(uf);
  } else {
    closeCityPanel();
  }
}

function treeOpenDetail(id) {
  openDetail(id);
  const m = allMarkers.find(mk => mk._did === id);
  if (m) {
    map.setView(m.getLatLng(), 12, { animate: true });
    setTimeout(() => m.openPopup(), 400);
  }
}

function toggleTreePanel() {
  const panel = document.getElementById('tree-panel');
  const btn   = document.getElementById('tree-btn');
  const isHidden = panel.style.display === 'none';

  panel.style.display = isHidden ? 'flex' : 'none';
  btn.innerHTML = isHidden ? '&#10005;' : '&#9776;';
  btn.title     = isHidden ? 'Fechar painel' : 'Abrir painel de regiões';

  // Leaflet não detecta mudanças de layout automaticamente
  setTimeout(() => map.invalidateSize(), 0);
}

/* ── PLAN FILTER ─────────────────────────────────────── */
function populatePlanFilter(data) {
  const plans = [...new Set(data.map(d => d.plano || 'Sem plano'))].sort((a, b) => {
    if (a === 'Combo - Plano Burn+') return -1;
    if (b === 'Combo - Plano Burn+') return  1;
    if (a === 'Combo - Plano Burn')  return -1;
    if (b === 'Combo - Plano Burn')  return  1;
    return a.localeCompare(b, 'pt-BR');
  });
  const sel = document.getElementById('plan-filter');
  const def = sel.options[0].cloneNode(true);
  sel.innerHTML = '';
  sel.appendChild(def);
  plans.forEach(p => {
    const o = document.createElement('option');
    o.value = p; o.textContent = p;
    sel.appendChild(o);
  });
}

document.getElementById('plan-filter').addEventListener('change', function () {
  activePlanFilter = this.value || null;
  document.getElementById('plan-filter-clear').style.display = activePlanFilter ? 'inline-flex' : 'none';
  const data = activePlanFilter ? allData.filter(d => d.plano === activePlanFilter) : allData;
  buildMarkers(data);
  if (activePlanFilter && allMarkers.length > 0) {
    const bounds = L.latLngBounds(allMarkers.map(m => m.getLatLng()));
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [60, 60], maxZoom: 8 });
  }
  resetDetail();
});

document.getElementById('plan-filter-clear').addEventListener('click', () => {
  const sel = document.getElementById('plan-filter');
  sel.value = '';
  activePlanFilter = null;
  document.getElementById('plan-filter-clear').style.display = 'none';
  buildMarkers(allData);
  resetDetail();
});

/* ── BOOT ────────────────────────────────────────────── */
async function boot() {
  initMap();
  try {
    const [dataRes, mktRes, extRes] = await Promise.all([
      fetch('/data.json'),
      fetch('/market.json'),
      fetch('/extras.json'),
    ]);
    const json = await dataRes.json();
    if (!json.ok) throw new Error(json.error);

    allData = json.data;
    buildMarkers(allData);
    populatePlanFilter(allData);

    const burn   = allData.filter(d => d.plano === 'Combo - Plano Burn').length;
    const burnp  = allData.filter(d => d.plano === 'Combo - Plano Burn+').length;
    const outros = allData.filter(d => d.plano !== 'Combo - Plano Burn' && d.plano !== 'Combo - Plano Burn+').length;
    document.getElementById('sb').textContent = burn;
    document.getElementById('sp').textContent = burnp;
    document.getElementById('so').textContent = outros;
    document.getElementById('st').textContent = allData.length;

    try {
      marketData = await mktRes.json();
    } catch (_) { /* market.json opcional */ }
    try {
      extrasData = await extRes.json();
    } catch (_) { /* extras.json opcional */ }

    resetDetail();
    renderTree();
  } catch (e) {
    console.error(e);
    showToast('Erro ao carregar dados: ' + e.message, true);
  }
  document.getElementById('loading').classList.add('gone');
}

boot();
