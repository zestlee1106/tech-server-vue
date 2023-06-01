import Vue from "vue";
import App from "./App.vue";

// router와 store가 instance를 반환하는게 아니라,
// instance를 생성하는 함수를 반환하도록 수정해야합니다.
// csr은 기본적으로 브라우저에서 렌더링 되기 때문에 router와 store가 1개씩만 필요합니다.
// 그런데 ssr은 다수의 사용자를 대상으로 하기 때문에
// 사용자마다 서로 다른 router와 store가 필요합니다.
// 그래서 router와 store를 생성하여 반환하도록 만들어야합니다.
import createRouter from "./router";
import createStore from "./store";

// 1. 이 파일을 entry point로 하여 server side에서 실행할 script를 번들링합니다.
// 2. Vue application을 만들어내는 함수를 반환합니다.
// 3. Promise를 반환할 수도 있으며, 단순하게 Vue instance를 반환해도 무관합니다.
// 4. server에서 rendering에 필요한 context를 매개변수 건내줍니다.
export default (context) =>
  new Promise((resolve) => {
    const router = createRouter();
    const store = createStore();
    const { url } = context;

    // server에서 보내준 url을 기준으로 router를 변경하고,
    // 해당 router를 기준으로 app을 rendering하여 문자열로 반환합니다.
    router.push(url);

    // router에 반영이 된 시점에 App instance를 만들어서 반환합니다.
    // 그래서 Promise가 사용됩니다.
    router.onReady(() =>
      resolve(
        new Vue({
          router,
          store,
          render: (h) => h(App),
        })
      )
    );
  });
