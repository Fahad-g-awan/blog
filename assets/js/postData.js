$(document).ready(function () {
  let posts = [
    {
      id: 1,
      image: "https://via.placeholder.com/600/92c952",
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      content:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600/92c952",
      title: "qui est esse",
      content:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600/92c952",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      content:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/600/92c952",
      title: "eum et est occaecati",
      content:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/600/92c952",
      title: "nesciunt quas odio",
      content:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/600/92c952",
      title: "dolorem eum magni eos aperiam quia",
      content:
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/600/92c952",
      title: "magnam facilis autem",
      content:
        "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/600/92c952",
      title: "dolorem dolore est ipsam",
      content:
        "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/600/92c952",
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      content:
        "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
      id: 10,
      title: "optio molestias id qu",
      image: "https://via.placeholder.com/600/92c952",
      content:
        "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
      id: 11,
      image: "https://via.placeholder.com/600/92c952",
      title: "et ea vero quia laudantium autem",
      content:
        "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
      id: 12,
      image: "https://via.placeholder.com/600/92c952",
      title: "in quibusdam tempore odit est dolorem",
      content:
        "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
      id: 13,
      image: "https://via.placeholder.com/600/92c952",
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      content:
        "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      id: 14,
      image: "https://via.placeholder.com/600/92c952",
      title: "voluptatem eligendi optio",
      content:
        "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
      id: 15,
      image: "https://via.placeholder.com/600/92c952",
      title: "eveniet quod temporibus",
      content:
        "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
    {
      id: 16,
      image: "https://via.placeholder.com/600/92c952",
      title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      content:
        "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    },
    {
      id: 17,
      image: "https://via.placeholder.com/600/92c952",
      title: "fugit voluptas sed molestias voluptatem provident",
      content:
        "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    },
    {
      id: 18,
      image: "https://via.placeholder.com/600/92c952",
      title: "voluptate et itaque vero tempora molestiae",
      content:
        "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    },
    {
      id: 19,
      image: "https://via.placeholder.com/600/92c952",
      title: "adipisci placeat illum aut reiciendis qui",
      content:
        "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    },
    {
      id: 20,
      image: "https://via.placeholder.com/600/92c952",
      title: "doloribus ad provident suscipit at",
      content:
        "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    },
    {
      id: 21,
      image: "https://via.placeholder.com/600/92c952",
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      content:
        "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
    },
    {
      id: 22,
      image: "https://via.placeholder.com/600/92c952",
      title: "dolor sint quo a velit explicabo quia nam",
      content:
        "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    },
    {
      id: 23,
      image: "https://via.placeholder.com/600/92c952",
      title: "maxime id vit,ae nihil numquam",
      content:
        "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
    },
    {
      id: 24,
      image: "https://via.placeholder.com/600/92c952",
      title: "autem hic labore sunt dolores incidunt",
      content:
        "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
    },
    {
      id: 25,
      image: "https://via.placeholder.com/600/92c952",
      title: "rem alias distinctio quo quis",
      content:
        "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
    },
    {
      id: 26,
      image: "https://via.placeholder.com/600/92c952",
      title: "est et quae odit qui non",
      content:
        "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
    },
    {
      id: 27,
      image: "https://via.placeholder.com/600/92c952",
      title: "quasi id eteos tenetur aut quo autem",
      content:
        "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
    },
  ];

  localStorage.setItem("posts", JSON.stringify(posts));
});
