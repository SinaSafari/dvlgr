exports.seed = function (knex) {
  const content = `ریدوس و ریدوسر


  اکثرا وقتی برای اولین بار از higher order function ها توی آرایه های javascript میشنویم، همه چی باحال و منطقی و کاربردی به نظر میاد تا وقتی که نوبت reduce میشه. موارد زیادی هست که از map یا filter استفاده میکنیم ولی reduce کاربرد های خاص تری داره و سر همین هم توضیحش شاید سخت تر باشه.
  
  حتی توی دنیای react هم همینطور هست و یکی از هوک هایی که بازم برای بار اول خیلی گنگ به نظر میاد، useReducer هست. یکم بررسیشون کنیم و ببینیم چی هستن.
  
  
  همه ی higher order array method ها برای این ساخته شدن که یه سری عملیات های پرکاردی و تکراری که روی آرایه ها انجام میشد رو آسون تر کنه. بهشون higher order function هم میگیم چون یک callback function به عنوان پارامتر میگیره و مکانیزم کلیشون هم این هست که این callback رو روی تک تک elemet های آرایه تکرار کنه. خب یقینا این روش از پیاده سازی هایی که با for معمولی و سنتی انجام میشد بهتر و سریع تر هست (البته سریع تر از لحاظ نوشتن برنامه نه اجرای اون توسط interpreter. در واقع for قدیمی خودمون تا حدی performance بهتری داره اما توی حجم خیلی زیاد دیتا قابل تشخیص هست. در کل استفاده کنید و فکر پرفورمنس نباشید!)
  
  
  Map and reduce
  
  
  بیاید با مقایسه map و reduce شروع کنیم. Map روی تک تک المنت های یک آرایه iterate میکنه و منطقی که توی callback ش نوشتیم رو روی اون المنت اجرا میکنه و return ش میکنه. و در نهایت یه آرایه جدید با اعضای جدید برمیگردونه که منطقا شامل المنت هایی هستن که اون لاجیک روشون اجرا شده. خب، همه چی منطقی عه و کلی هم پرکاربرد هست.
  
  نکته ای که وجود داره این هست که این callback توی map برای هر المنت به شکل کاملا مستقل اجرا میشه. به قولی ایزوله هست و هیچ ربطی به بقیه المنت های ارایه نداره. و مشکلی که reduce قراره حل کنه دقیقا همین هست.
  
  مثال معروفی که برای معرفی reduce میزنن این هست که فرض میکنیم آرایه ای از اعداد داریم و میخوایم جمع کل المنت های این آرایه رو بگیریم. با توجه به ویژگی هایی که برای map گفتیم، برای حل این مسئله کارا نیست. راه حلی که هست اینه که میتونیم با for loop سنتی این کار رو بکنیم:
  
  
  <<for loop sum of array elements>>
  
  
  \`\`\`js
  
  const arr = [1,2,3,4]
  
  let sum = 0
  
  
  for(let i = 0; i < arr.length; i++) {
  
          sum += array[i]
  
  }
  
  console.log(sum) // 10
  
  \`\`\`
  
  
  همه چی اوکی هست و کد به بهتری شکل ممکن کار میکنه. اما راهی هست که این مسئله رو با سینتکسی شبیه به چیزی که توی map دیدیم پیاده سازی کنیم؟ دقیقا reduce برای حل مشکلات این شکلی به وجود اومده.
  
  اگر بخوایم خیلی ساده و یک جمله ای بگیم که reduce چی هست، میتونیم بگیم که reduce یک map با حافظه هست. خب شاید این توضیح نتونه همه ویژگی هاش رو پوشش بده ولی تا حدی درست هست و توی reduce ما به مقدار قبلی محاسبه شده دسترسی داریم.
  
  توی map پارامتر هایی که callback میگرفتن (و به این فانکشن reducer میگیم) این جوری هست:
  
  
  <<map callback parameter>>
  
  
  \`\`\`js
  
  arr.map((element, index, arr)=>{ /* logic of callback */ }, this)
  
  \`\`\`
  
  که خب اسم های پارامتر ها واضح هستن ولی اگر بخوایم توصیف کنیم، به ترتیب المنت فعلیمون، index اون المنت توی آرایه ای که map داره روی اون اجرا میشه، و در نهایت خود آرایه ای که روش داریم map رو call میکنیم به عنوان پارامتر سوم هست. اینم بگم که فقط پارامتر اول اجباری هست و بقیه optional هستن.
  
  پارامتر دوم reduce هم مقداری هست که به عنوان this توی reducer function میاد. شاید کاربردی نباشه ولی دونستن اینکه وجود داره خوبه
  
  
  اما reduce پارامتر های متفاوتی داره:
  
  
  \`\`\`js
  
  arr.reduce((previousValue, current, index, arr) => { /* logic of callback */ }, initialValue)
  
  \`\`\`
  
  توی reduce پارامتر اول reducer مقداری هست که توی iteration قبلی داشتیم. Current و index و arr دقیقا مثل map هستن و پارامتر دوم reduce مقدار اولیه ای هست که reducer به عنوان پارامتر اول توی iteration اول دریافت میکنه. بجز previousValue و current بقیه پارامتر ها optional هستند.
  
  بیایید مثالی که برای جمع اعداد با for loop داشتیم رو با reduce بنویسیم:
  
  
  \`\`\`js
  
  const arr = [1, 2, 3, 4];
  
  const reducer = (prev, curr) => prev + curr;
  
  console.log(arr.reduce(reducer));
  
  \`\`\`
  
  
  \`\`\`js
  
  const arr =[1,2,3,4]
  
  const reducer = (prev, curr) => prev + curr
  
  console.log(arr.reduce(reducer, 0)) // 10
  
  \`\`\`
  
  
  خب، باحال بود! Reduce یقینا سینتکس تمیز تری داره.
  
  
  
  بعضی از کاربرد های Array.reduce
  
  
  بیاید یه مثال یکم باحال تر و شاید کاربردی تر رو هم بررسی کنیم. فرض کنیم یک سبد خرید داریم که میخوایم قیمت نهایی رو حساب کنیم.
  
  
  \`\`\`js
  
  const data = [{price: 10},{price: 12},{price: 8}]
  
  const totalPrice = data.reduce((prev, curr) => prev + curr.price, 0)
  
  console.log(totalPrice) // 30
  
  \`\`\`
  
  یا یه مثال دیگه. کبابی داریم و میخوایم تعداد سفارش های هر ایتم غذا رو ببینیم:
  
  
  
  \`\`\`js
  
  const data = [
  
          {
  
                  title:'kebab'
  
  },
  
  {
  
                  title:'tomato'
  
  },
  
  {
  
                  title:'cocacola'
  
  },
  
  {
  
                  title:'kebab'
  
  },
  
  ]
  
  
  
  const countOfItems = data.reduce((allItems, curr) => {
  
          (curr.title in allItems)
  
  ? allItems[curr.title]++
  
  : allItems[curr.title] = 1
  
          return allItems
  
  }, {})
  
  
  console.log(countOfItems)
  
  // {kebab: 2, tomato: 1, cocacola: 1}
  
  \`\`\`
  
  
  
  میشه مثال های زیادی از کاربرد reduce زد. حتی با reduce میشه عملکرد بقیه higher order function های آرایه ها رو هم شبیه سازی کرد. مثل map یا filter. مثلا برای map میشه اینطوری پیش رفت:
  
  \`\`\`js
  
  const numbers = [-5, 6, 2, 0,];
  
  
  const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  
    previousValue.push(currentValue * 2);
  
    return previousValue;
  
  }, []);
  
  
  console.log(doubledPositiveNumbers); // [-10, 12, 4, 0]
  
  \`\`\`
  
  
  اما خب استفاده از map یقینا اسون تر و مشخص تر هست.
  
  
  Reducer function
  
  
  در کل array.reduce میاد یه reducer رو روی تک تک المنت های ارایه call میکنه. ولی ما مفهوم reducer رو جاهای دیگه هم میبینیم. مهم ترینش توی redux هست و بعد از اون هم توی یکی از هوک های react به اسم useRecuer. پس reduce رو با reducer اشتباه نگیرید. هرکدوم داستانای خودشونو دارن!
  
  خیلی ساده بخوایم بگیم، reducer یک function هست که پارامتر اولش مقادیر قبلی هست و پارامتر دومش مقادیر جدید. با در نظر گرفتن مقادیر قبلی و جدید یه سری محاسبات انجام میشه یا یه سری تصمیم گیری ها میشه و یه مقدار جدید return میشه.
  
  مثلا یه reducer توی ساختار redux معمولا به این شکل پیاده سازی میشه: (البته اگر بگیم '... اینجوری پیاده سازی میشد' بهتر هست. معمولا پروژه های جدید تر از redux toolkit استفاده میکنن که به هر حال ساختار ساده تری نسبت به redux خام داره. البته که هنوز مونده تا کلا جایگزین بشه)
  
  
  <<reducer in redux>>
  
  
  \`\`\`js
  
  const reducer = (state, action) => {
  
          switch(action.type) {
  
                  case ‘increment’:
  
                          return { ...state, counter : state.counter + 1 }
  
                  default:
  
                          return state
  
  }
  
  }
  
  \`\`\`
  
  
  پارامتر state میشه مقادیر قبلی و action میشه مقادیر فعلی. دقیقا ساختاری شبیه به چیزی که توی array.reduce میدیدیم اینجا هم اتفاق میوفته.
  
  
  
  
  
  در دنیای فانکشنال
  
  
  با اینکه javascript زبان خوبی برای functional programming هست و فیچر های خوبی برای این پارادایم داره (و همچنین طرفدار های زیادی هم داره)، ولی کم پیش میاد که اصولی بهش پرداخته بشه. شاید هم هر روز ازش استفاده کنیم ولی اسم هاش رو ندونیم. شاید بتونیم بگیم از مباحث پیشرفته javascript هم حساب بشه.
  
   یکی از فیچر های functional programming مفهومی هست به اسم function composing که به معنی این هست که به معنی ترکیب چند فانکشن برای ساخت یک فانکشن جدید هست. یکی از راه هایی که میشه این مفهوم رو پیاده سازی کرد، استفاده از reduce هست. برای مثال برای ساخت میخوایم برای پست های وبلاگمون slug درست کنیم:
  
  
  \`\`\`js
  
  const pipe = (...fns) => x => fns.reduce((v,f) => f(v), x)
  
  const slugify = pipe(
  
          split(“ ”),
  
          map(toLowerCase),
  
          join(“-”),
  
          encodeURIComponent
  
  )
  
  console.log(slugify(‘Hello world’)) // “Hello-world”
  
  \`\`\`
  
  
  به طور کلی pipe به ترتیب function ها رو call میکنه و مقداری که از function ها return میشه رو به عنوان پارامتر به function بعدی پاس میده. و در نهایت تمام این function ها compose میشن و به یک فانکشن تبدیل میشن.
  
  
  
  حرف آخر
  
  کارایی Array.reduce و مفهوم reducer چیزی نیست که شاید هر روز به کارمون بیاد اما دونستن اون میتونه تو موقعیت هایی که نوشتن یه لاجیک سخت برامون دردسر شده کمکمون کنه. علاوه بر اون باعث درک بهتر از ابزار های دیگه مثل redux میشه. علاوه بر اون استفاده از ابزار دیگه ای مثل useReducer میتونه باعث بهتر شدن performance اپلیکیشن بشه که خب هر چیزی که حتی ذره ای به بهبود performance کمک کنه به شدت ارزشمند هست.
  
  توی قسمت دوم این مقاله، استفاده از این کانسپت reducer در react به کمک useReducer رو بررسی خواهیم کرد.`;

  const content2 = ``;
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          title: "post 1",
          slug: "slug-1",
          content: "content one",
          status: "published",
          hero_image: "test.png",
          author_id: 1,
          category_id: 1,
          created_at: new Date().toISOString(),
        },
        {
          id: 2,
          title: "post 2",
          slug: "slug-2",
          content: "content two",
          status: "published",
          hero_image: "test.png",
          author_id: 1,
          category_id: 2,
          created_at: new Date().toISOString(),
        },
        {
          id: 3,
          title: "post 3",
          slug: "slug-3",
          content: "content three",
          status: "published",
          hero_image: "test.png",
          author_id: 2,
          category_id: 1,
          created_at: new Date().toISOString(),
        },
        {
          id: 4,
          title: "ریدوسر",
          slug: "reducer",
          content: content,
          status: "published",
          hero_image: "test.png",
          author_id: 1,
          category_id: 1,
          created_at: new Date().toISOString(),
        },
      ]);
    });
};
