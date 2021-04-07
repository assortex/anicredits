newFunction();
function newFunction() {
	var AniCredits = angular.module('AniCredits', []);

	AniCredits.controller('DisplayPanel', function ($scope) {
		$scope.events = [
			{ 'title': '100-Nichikan Ikita Wani', 'credit': '©2021「100日間生きたワニ」製作委員会', 'site': 'https://100wani-movie.com/', 'twitter': '100waniOfficial'}
			{ 'title': '6 LOVERS', 'credit': '©おげれつたなか・左京亜也・ 志水ゆき・宝井理人・夏目イサク・門地かおり ／ 新書館', 'site': 'https://www.clubmail.jp/6_lovers.html', 'twitter': 'N/A'},
			{ 'title': '86: Eighty Six', 'credit': '©2020 安里アサト/KADOKAWA/Project-86', 'site': 'https://anime-86.com/', 'twitter': 'anime_eightysix'},
			{ 'title': 'Aka-chan Honbuchou', 'credit': '©竹内佐千子・講談社／ＮＨＫ・ＮＥＰ・テレコムスタッフ', 'site': 'https://www.nhk.jp/p/ts/7PR67N6RJ8/', 'twitter': 'akachanhonbucho'},
			{ 'title': 'Bakugan: Geogan Rising', 'credit': '©S/T/N/BGR PROJECT', 'site': 'http://www.bakugan.jp/', 'twitter': 'bakugan_jp'},
			{ 'title': 'Bakuten!!', 'credit': '©バクテン製作委員会', 'site': 'https://bakuten-pr.com/', 'twitter': 'bakuten_pr'},
			{ 'title': 'BanG Dream! Episode of Roselia I: Yakusoku', 'credit': '©BanG Dream! Project ©Craft Egg Inc.©bushiroad All Rights Reserved.', 'site': 'https://roselia-movie.bang-dream.com/', 'twitter': 'bang_dream_info'},
			{ 'title': 'Battle Athletess Daiundoukai: ReSTART!', 'credit': '©ＡＩＣライツ/太陽系管理委員会', 'site': 'https://daiundoukai-restart.jp/', 'twitter': 'daiundokai_r'},
			{ 'title': 'Beyblade Burst Dynamite Battle', 'credit': '©Hiro Morita, BBBProject', 'site': 'https://www.beyblade.jp/teaser_6th/', 'twitter': 'beyblade_info'},
			{ 'title': 'Bishounen Tanteidan', 'credit': '©NISIOISIN/KODANSHA, ANIPLEX, SHAFT', 'site': 'https://prettyboydetectiveclub-anime.com/', 'twitter': 'nisioisin_anime'},
			{ 'title': 'BLUE REFLECTION RAY', 'credit': '©コーエーテクモゲームス/AASA', 'site': 'https://www.bluereflection-ray.com/', 'twitter': 'BRRAY_anime'},
			{ 'title': 'Boku no Hero Academia 5', 'credit': '© 堀越耕平／集英社・僕のヒーローアカデミア製作委員会', 'site': 'https://heroaca.com/', 'twitter': 'heroaca_anime'},
			{ 'title': 'Cardfight!! Vanguard: overDress', 'credit': '©VANGUARD overDress　Character Design ©2021 CLAMP・ST', 'site': 'https://anime.cf-vanguard.com/overdress/', 'twitter': 'cfvanguard_PR'},
			{ 'title': 'Cestvs: The Roman Fighter', 'credit': '©技来静也, 白泉社/セスタス製作委員会', 'site': 'https://cestvs-anime.com/', 'twitter': 'cestvs_anime'},
			{ 'title': 'Crayon Shin-chan: Nazo Meki! Hana no Tenkasu Gakuen', 'credit': '©臼井儀人／双葉社・シンエイ・テレビ朝日・ADK 2021', 'site': 'https://www.shinchan-movie.com/', 'twitter': 'crayon_official'},
			{ 'title': 'Dinosaur Biyori', 'credit': '©ダイナ荘管理組合', 'site': 'https://dinosaur-biyori.com/', 'twitter': 'dinosaur_biyori'},
			{ 'title': 'Dosukoi Sushi-Zumo', 'credit': '©アンマサコ・講談社／どすこいすしずもう製作委員会', 'site': 'https://sushisumo.jp/', 'twitter': 'sushisumo_jp'},
			{ 'title': 'Dragon, Ie wo Kau.', 'credit': '©多貫カヲ・絢 薔子／マッグガーデン・「ドラゴン、家を買う。」製作委員会', 'site': 'https://doraie.com/', 'twitter': 'anime_doraie'},
			{ 'title': 'Duel Masters King!', 'credit': 'TM and © 2021, Wizards of the Coast, Shogakukan, Mitsui/Kids, ShoPro,TV TOKYO', 'site': 'https://www.tv-tokyo.co.jp/anime/dm_king2/', 'twitter': 'duema_anime'},
			{ 'title': 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III OVA', 'credit': '©大森藤ノ・SBクリエイティブ/ダンまち3製作委員会', 'site': 'http://danmachi.com/danmachi3/', 'twitter': 'danmachi_anime'},
			{ 'title': 'Eden', 'credit': '© 2021 NETFLIX', 'site': 'https://www.netflix.com/eden', 'twitter': 'NetflixJP_Anime'},
			{ 'title': 'EDENS ZERO', 'credit': '©真島ヒロ／講談社・NTV', 'site': 'https://edens-zero.net/anime/', 'twitter': 'EDENSZERO_PJ'},
			{ 'title': 'Eiga Daisuki Pompo-san', 'credit': '©2020 杉谷庄吾【人間プラモ】／KADOKAWA／ 映画大好きポンポさん製作委員会', 'site': 'https://pompo-the-cinephile.com/', 'twitter': 'pomposan'},
			{ 'title': 'Etotama: Nyankyaku Banrai', 'credit': '© えとたま製作委員会 ／ © えとたま製作委員会「猫客万来」', 'site': 'http://etotama.com/nyankyakubanrai/', 'twitter': 'etotama_anime'},
			{ 'title': 'Fairy Ranmaru: Anata no Kokoro Otasuke Shimasu', 'credit': '©馬谷たいが／F蘭製作委員会', 'site': 'https://f-ran.jp/', 'twitter': 'FairyRanmaru'},
			{ 'title': 'Fate/Grand Order: Shinsei Entaku Ryouiki Camelot - Paladin; Agateram', 'credit': '©TYPE-MOON / FGO6 ANIME PROJECT', 'site': 'https://anime.fate-go.jp/ep6-movie/', 'twitter': 'FGOAP_ep6'},
			{ 'title': 'Fruits Basket: The Final', 'credit': '© NATSUKI TAKAYA.HAKUSENSHA/FRUITS BASKET PROJECT Licensed by Funimation® Productions, Ltd. All Rights Reserved.', 'site': 'https://www.fruitsbasketofficial.com/', 'twitter': 'fruitsbasket_en'},
			{ 'title': 'Fumetsu no Anata e', 'credit': '© ⼤今良時・講談社／NHK・NEP', 'site': 'https://anime-fumetsunoanatae.com/en/?l=en', 'twitter': 'fumetsunoanatae'},
			{ 'title': 'Girls und Panzer: Saishuushou 3', 'credit': '© GIRLS und PANZER Finale Projekt © GIRLS und PANZER Film Projekt © GIRLS und PANZER Projekt', 'site': 'https://girls-und-panzer-finale.jp/', 'twitter': 'garupan'},
			{ 'title': 'Godzilla: Singular Point', 'credit': '©2020 TOHO CO., LTD.', 'site': 'https://godzilla-sp.jp/', 'twitter': 'GODZILLA_SP'},
			{ 'title': 'Gokushufudou', 'credit': '© 2021 NETFLIX', 'site': 'http://www.netflix.com/TheWayoftheHousehusband', 'twitter': 'NetflixJP_Anime'},
			{ 'title': 'Healin\' Good♥Precure: Yume no Machi de Kyun! Tto GoGo! Dai Henshin!!', 'credit': '©2020 映画ヒーリングっど♡プリキュア製作委員会', 'site': 'https://2021spring.precure-movie.com/pc/', 'twitter': 'precure_movie'},
			{ 'title': 'Hetalia World★Stars', 'credit': '©日丸屋秀和／集英社・ヘタリアW★S製作委員会', 'site': 'https://hetalia-ws.com/', 'twitter': 'animehetalia_ws'},
			{ 'title': 'Hige wo Soru. Soshite Joshikousei wo Hirou.', 'credit': '©しめさば・KADOKAWA／『ひげひろ』製作委員会', 'site': 'http://higehiro-anime.com/', 'twitter': 'higehiro_anime'},
			{ 'title': 'iii icecrin', 'credit': '©シンエイ動画／あいすくりんs', 'site': 'https://iii-icecrin.com/', 'twitter': 'iii_icecrin'},
			{ 'title': 'Ijiranaide, Nagatoro-san', 'credit': '©ナナシ・講談社／「イジらないで、長瀞さん」製作委員会', 'site': 'https://www.nagatorosan.jp/', 'twitter': 'nagatoro_tv'},
			{ 'title': 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω', 'credit': '©むらさきゆきや・講談社／異世界魔王Ω製作委員会', 'site': 'https://isekaimaou-anime.com/', 'twitter': 'isekaimaou'},
			{ 'title': 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω Mini Anime', 'credit': '©むらさきゆきや・講談社／異世界魔王Ω製作委員会', 'site': 'https://isekaimaou-anime.com/', 'twitter': 'isekaimaou'},
			{ 'title': 'Itazura Guma no Gloomy', 'credit': '©MORI CHACK/GloomyPJ', 'site': 'https://gloomy-official.com/', 'twitter': 'official_gloomy'},
			{ 'title': 'Jaku-Chara Tomozaki-kun OVA', 'credit': '©屋久ユウキ・小学館／「弱キャラ友崎くん」製作委員会', 'site': 'http://tomozaki-koushiki.com/', 'twitter': 'tomozakikoshiki'},
			{ 'title': 'Jouran: THE PRINCESS OF SNOW AND BLOOD', 'credit': '©擾乱製作委員会', 'site': 'https://joran.jp/', 'twitter': 'joran_official'},
			{ 'title': 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA', 'credit': '©赤坂アカ／集英社・かぐや様は告らせたい製作委員会', 'site': 'https://kaguya.love/', 'twitter': 'anime_kaguya'},
			{ 'title': 'Kidou Senshi Gundam: Senkou no Hathaway', 'credit': '© 創通・サンライズ', 'site': 'http://gundam-hathaway.net/', 'twitter': 'gundam_hathaway'},
			{ 'title': 'Koi to Yobu ni wa Kimochi Warui', 'credit': '©もぐす・一迅社／恋きも製作委員会', 'site': 'https://koikimo.jp/', 'twitter': 'koikimo_anime'},
			{ 'title': 'Kyuukyoku Shinka Shita Full Dive RPG ga Genjitsu yori mo Kusogee Dattara', 'credit': '©土日月・株式会社KADOKAWA刊／究極進化した製作委員会', 'site': 'https://fulldive-rpg.com/', 'twitter': 'fulldive_anime'},
			{ 'title': 'Mairimashita! Iruma-kun 2', 'credit': '©西修（秋田書店)／NHK・NEP', 'site': 'https://www6.nhk.or.jp/anime/program/detail.html?i=iruma', 'twitter': 'wc_mairuma'},
			{ 'title': 'MARS RED', 'credit': '© 藤沢文翁／SIGNAL.MD／MARS RED製作委員会', 'site': 'https://marsred.tv/', 'twitter': 'marsredtv'},
			{ 'title': 'Mashiro no Oto', 'credit': '©羅川真里茂・講談社／ましろのおと製作委員会', 'site': 'https://mashironooto-official.com/', 'twitter': 'mashironooto_pr'},
			{ 'title': 'Mazica Party', 'credit': '©MAZICA PARTY PROJECT・TVO', 'site': 'https://www.tv-osaka.co.jp/ip4/mazicaparty/', 'twitter': 'mazica_party'},
			{ 'title': 'Meitantei Conan: Hiiro no Dangan', 'credit': '©2020 青山剛昌／名探偵コナン製作委員会', 'site': 'https://www.conan-movie.jp/', 'twitter': 'conan_movie'},
			{ 'title': 'Mewkledreamy Mix!', 'credit': '©2017,2020 SANRIO CO.,LTD.　ミュークルドリーミー製作委員会・テレビ東京', 'site': 'https://mewkledreamy.com/', 'twitter': 'mewkle_a'},
			{ 'title': 'Motto! Majime ni Fumajime Kaiketsu Zorori 2nd Season', 'credit': '©原ゆたか／ポプラ社・BNP・NEP', 'site': 'http://www.zorori.jp/', 'twitter': 'zororizz'},
			{ 'title': 'NOMAD: Megalo Box 2', 'credit': '© Asao Takamori, Tetsuya Chiba/Kodansha/MEGALOBOX2 project. All Rights Reserved.', 'site': 'https://megalobox.com/en/', 'twitter': 'joe50_megalobox'},
			{ 'title': 'Odd Taxi', 'credit': '© P.I.C.S. / 小戸川交通パートナーズ', 'site': 'https://oddtaxi.jp/', 'twitter': 'oddtaxi_'},
			{ 'title': 'Osananajimi ga Zettai ni Makenai Love Come', 'credit': '©2021 二丸修一/KADOKAWA/おさまけ製作委員会', 'site': 'https://osamake.com/', 'twitter': 'osamake_project'},
			{ 'title': 'Sayonara Watashi no Cramer', 'credit': '©新川直司・講談社／さよなら私のクラマー製作委員会', 'site': 'https://sayonara-cramer.com/tv/', 'twitter': 'cramer_pr'},
			{ 'title': 'SD Gundam World Heroes', 'credit': '©SOTSU・SUNRISE', 'site': 'https://en.gundam.info/about-gundam/series-pages/sdw-soketsuden.html', 'twitter': 'gundam_info'},
			{ 'title': 'Seijo no Maryoku wa Bannou desu', 'credit': '©2021 橘由華・珠梨やすゆき／KADOKAWA／「聖女の魔力は万能です」製作委員会', 'site': 'https://seijyonomaryoku.jp/', 'twitter': 'seijyonoanime'},
			{ 'title': 'Sentouin, Hakenshimasu!', 'credit': '©2021 暁なつめ, カカオ・ランタン／KADOKAWA／「戦闘員、派遣します！」製作委員会', 'site': 'https://kisaragi-co.jp/', 'twitter': 'sentoin_anime'},
			{ 'title': 'Seven Knights Revolution: Eiyuu no Keishousha', 'credit': '©Netmarble Corp.& Netmarble Nexus Inc.・セブンナイツ製作委員会', 'site': 'https://sevenknights-anime.jp/', 'twitter': 'SenaRevo_anime'},
			{ 'title': 'Shadows House', 'credit': '©ソウマトウ／集英社・シャドーハウス製作委員会', 'site': 'https://shadowshouse-anime.com/', 'twitter': 'shadowshouse_yj'},
			{ 'title': 'Shakunetsu Kabaddi', 'credit': '©2020武蔵野創・小学館／灼熱カバディ製作委員会', 'site': 'https://www.tv-tokyo.co.jp/anime/kabaddi/', 'twitter': 'kabaddi_anime'},
			{ 'title': 'SHAMAN KING (2021)', 'credit': '©武井宏之・講談社／SHAMAN KING Project.・テレビ東京', 'site': 'https://shamanking-project.com/', 'twitter': 'SHAMANKING_PR'},
			{ 'title': 'Shikaruneko', 'credit': '© 2019-2021 mojacookie.', 'site': 'https://mojacookie.com/', 'twitter': 'shikaruneko'},
			{ 'title': 'Shin Tennis no Ouji-sama: Hyoutei vs Rikkai - Game of Future', 'credit': '© 許斐 剛／集英社・NAS・新テニスの王子様プロジェクト', 'site': 'http://tenipuri.jp/h-r/', 'twitter': 'shintenianime'},
			{ 'title': 'Shinkansen Henkei Robo Shinkalion Z', 'credit': '©プロジェクト シンカリオン・JR-HECWK/超進化研究所Z・TX', 'site': 'https://www.shinkalion.com/', 'twitter': 'shinkalion'},
			{ 'title': 'Shoujo☆Kageki Revue Starlight Movie', 'credit': '©Project Revue Starlight', 'site': 'https://cinema.revuestarlight.com/', 'twitter': 'revuestarlight'},
			{ 'title': 'Sidonia no Kishi: Ai Tsumugu Hoshi', 'credit': '©弐瓶勉・講談社／東亜重工重力祭運営局', 'site': 'https://sidonia-anime.jp/#index', 'twitter': 'SIDONIA_anime'},
			{ 'title': 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita', 'credit': '©森田季節・SBクリエイティブ／高原の魔女の家', 'site': 'https://slime300-anime.com/', 'twitter': 'slime300_PR'},
			{ 'title': 'SSSS.DYNAZENON', 'credit': '©円谷プロ ©2021 TRIGGER・雨宮哲／「DYNAZENON」製作委員会', 'site': 'https://dynazenon.net/', 'twitter': 'SSSS_PROJECT'},
			{ 'title': 'Subarashiki Kono Sekai: The Animation', 'credit': '©SQUARE ENIX/The World Ends with You Project,MBS', 'site': 'https://subarashiki-anime.jp/en/', 'twitter': 'TWEWY_PR'},
			{ 'title': 'Super Cub', 'credit': '©Tone Koken,hiro/ベアモータース', 'site': 'https://supercub-anime.com/', 'twitter': 'supercub_anime'},
			{ 'title': 'Tenchi Souzou Design-bu: Tokubetsu-hen', 'credit': '©蛇蔵＆鈴木ツタ・たら子・講談社／天地創造デザイン部製作委員会', 'site': 'https://tendebu.jp/', 'twitter': 'tendebu_PR'},
			{ 'title': 'Tensura Nikki: Tensei Shitara Slime Datta Ken', 'credit': '©川上泰樹・伏瀬・講談社／転スラ製作委員会', 'site': 'https://www.ten-sura.com/anime/tensura-nikki', 'twitter': 'ten_sura_anime'},
			{ 'title': 'Thunderbolt Fantasy: Touriken Yuuki 3', 'credit': '©2016 Thunderbolt Fantasy Project', 'site': 'https://www.thunderboltfantasy.com/season3/', 'twitter': 'TBF_PR'},
			{ 'title': 'Tokyo Revengers', 'credit': '©和久井健・講談社／アニメ「東京リベンジャーズ」製作委員会', 'site': 'https://tokyo-revengers-anime.com/', 'twitter': 'anime_toman'},
			{ 'title': 'Tropical-Rouge! Precure Petit Tobikome! Collabo♡Dance Party!', 'credit': '©2020 映画ヒーリングっど♡プリキュア製作委員会', 'site': 'https://2021spring.precure-movie.com/pc/', 'twitter': 'precure_movie'},
			{ 'title': 'Uchuu Nanchara Kotetsu-kun', 'credit': '©2021 Space Academy/ちょっくら月まで委員会', 'site': 'Space__Academy', 'twitter': 'Space__Academy'},
			{ 'title': 'Vivy: Fluorite Eye’s Song', 'credit': '©Vivy Score / アニプレックス・WIT STUDIO', 'site': 'https://vivy-portal.com/', 'twitter': 'vivy_portal'},
			{ 'title': 'Washimo 9', 'credit': '© 宮藤官九郎・安齋肇・小学館／NHK・NEP', 'site': 'http://www9.nhk.or.jp/anime/wasimo/', 'twitter': 'N/A'},
			{ 'title': 'Yakunara Mug Cup Mo', 'credit': '©プラネット・日本アニメーション／やくならマグカップも製作委員会', 'site': 'https://yakumo-project.com/', 'twitter': 'yakumo_project'},
			{ 'title': 'Yasuke', 'credit': '© 2021 NETFLIX', 'site': 'https://www.netflix.com/yasuke', 'twitter': 'NetflixJP_Anime'},
			{ 'title': 'Youkai Watch ♪', 'credit': '©LEVEL-5/妖怪ウォッチ♪プロジェクト・テレビ東京', 'site': 'https://www.tv-tokyo.co.jp/anime/youkai-watch2021/', 'twitter': 'eiga_yokai'},
			{ 'title': 'Yuuki Yuuna wa Yuusha de Aru Churutto!', 'credit': '©2021 Project 2H', 'site': 'http://yuyuyu.tv/churutto/', 'twitter': 'anime_yukiyuna'},
			{ 'title': 'Yuukoku no Moriarty Part 2', 'credit': '©竹内良輔・三好 輝／集英社・憂国のモリアーティ製作委員会', 'site': 'https://moriarty-anime.com/', 'twitter': 'moriarty_anime'},
			{ 'title': 'Zombie Land Saga: Revenge', 'credit': '©ZOMBIE LAND SAGA REVENGE PARTNERS', 'site': 'https://zombielandsaga.com/', 'twitter': 'zombielandsaga'},
			{ 'title': 'Back Arrow', 'credit': '©谷口悟朗・中島かずき・ANIPLEX／バック・アロウ製作委員会', 'site': 'https://back-arrow.com/', 'twitter': 'backarrow_info'},
			{ 'title': 'Kingdom 3rd Season', 'credit': '©原泰久／集英社・キングダム製作委員会', 'site': 'https://kingdom-anime.com/', 'twitter': 'kingdom_animePR'},
			{ 'title': 'Kumo Desu ga, Nani ka?', 'credit': '©Okina BABA,Tsukasa KIRYU/PUBLISHED BY KADOKAWA/So I\'m a Spider, So What? PARTNERS', 'site': 'https://kumo-anime.com/', 'twitter': 'kumoko_anime'}			
		];
		$scope.title = "World";
	});
}

