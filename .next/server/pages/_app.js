/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/MediumContext.js":
/*!**********************************!*\
  !*** ./context/MediumContext.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediumContext\": () => (/* binding */ MediumContext),\n/* harmony export */   \"MediumProvider\": () => (/* binding */ MediumProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst MediumContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst MediumProvider = ({ children  })=>{\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getUsers = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\"));\n            setUsers(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        ...doc.data()\n                    }\n                };\n            }));\n        };\n        getUsers();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getPosts = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"articles\"));\n            setPosts(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        body: doc.data().body,\n                        brief: doc.data().brief,\n                        category: doc.data().category,\n                        postLength: doc.data().postLength,\n                        bannerImage: doc.data().bannerImage,\n                        title: doc.data().title,\n                        postedOn: doc.data().postedOn.toDate(),\n                        author: doc.data().author\n                    }\n                };\n            }));\n        };\n        getPosts();\n    }, []);\n    const addUserToFirebase = async (user)=>{\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", user.email), {\n            email: user.email,\n            name: user.displayName,\n            imageUrl: user.photoURL,\n            followerCount: 0\n        });\n    };\n    const handleUserAuth = async ()=>{\n        const userData = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase__WEBPACK_IMPORTED_MODULE_4__.provider);\n        const user = userData.user;\n        console.log(user, \"✅\");\n        setCurrentUser(user);\n        addUserToFirebase(currentUser);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediumContext.Provider, {\n        value: {\n            posts,\n            users,\n            handleUserAuth,\n            currentUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\next JS\\\\medium-app\\\\context\\\\MediumContext.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L01lZGl1bUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDc0I7QUFDWDtBQUNWO0FBSWpELE1BQU1XLGFBQWEsaUJBQUdOLG9EQUFhLEVBQUU7QUFFckMsTUFBTU8sY0FBYyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDckMsTUFBTSxLQUFDQyxLQUFLLE1BQUVDLFFBQVEsTUFBSVIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFDUyxLQUFLLE1BQUVDLFFBQVEsTUFBSVYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFDVyxXQUFXLE1BQUVDLGNBQWMsTUFBSVosK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFcERELGdEQUFTLENBQUMsSUFBTTtRQUNaLE1BQU1jLFFBQVEsR0FBRyxVQUFZO1lBQ3pCLE1BQU1DLGFBQWEsR0FBRyxNQUFNbkIsMkRBQU8sQ0FBQ0QsOERBQVUsQ0FBQ08seUNBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUU1RE8sUUFBUSxDQUFDTSxhQUFhLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDbkIsQ0FBQUEsR0FBRyxHQUFJO2dCQUNuQyxPQUFPO29CQUNIb0IsRUFBRSxFQUFFcEIsR0FBRyxDQUFDb0IsRUFBRTtvQkFDVkMsSUFBSSxFQUFFO3dCQUNGLEdBQUdyQixHQUFHLENBQUNxQixJQUFJLEVBQUU7cUJBQ2hCO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRURMLFFBQVEsRUFBRTtJQUVkLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTmQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osTUFBTW9CLFFBQVEsR0FBRyxVQUFZO1lBQ3pCLE1BQU1MLGFBQWEsR0FBRyxNQUFNbkIsMkRBQU8sQ0FBQ0QsOERBQVUsQ0FBQ08seUNBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUUvRFMsUUFBUSxDQUFDSSxhQUFhLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDbkIsQ0FBQUEsR0FBRyxHQUFJO2dCQUNuQyxPQUFPO29CQUNIb0IsRUFBRSxFQUFFcEIsR0FBRyxDQUFDb0IsRUFBRTtvQkFDVkMsSUFBSSxFQUFFO3dCQUNGRSxJQUFJLEVBQUV2QixHQUFHLENBQUNxQixJQUFJLEVBQUUsQ0FBQ0UsSUFBSTt3QkFDckJDLEtBQUssRUFBRXhCLEdBQUcsQ0FBQ3FCLElBQUksRUFBRSxDQUFDRyxLQUFLO3dCQUN2QkMsUUFBUSxFQUFFekIsR0FBRyxDQUFDcUIsSUFBSSxFQUFFLENBQUNJLFFBQVE7d0JBQzdCQyxVQUFVLEVBQUUxQixHQUFHLENBQUNxQixJQUFJLEVBQUUsQ0FBQ0ssVUFBVTt3QkFDakNDLFdBQVcsRUFBRTNCLEdBQUcsQ0FBQ3FCLElBQUksRUFBRSxDQUFDTSxXQUFXO3dCQUNuQ0MsS0FBSyxFQUFFNUIsR0FBRyxDQUFDcUIsSUFBSSxFQUFFLENBQUNPLEtBQUs7d0JBQ3ZCQyxRQUFRLEVBQUU3QixHQUFHLENBQUNxQixJQUFJLEVBQUUsQ0FBQ1EsUUFBUSxDQUFDQyxNQUFNLEVBQUU7d0JBQ3RDQyxNQUFNLEVBQUUvQixHQUFHLENBQUNxQixJQUFJLEVBQUUsQ0FBQ1UsTUFBTTtxQkFDNUI7aUJBQ0o7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRFQsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1VLGlCQUFpQixHQUFHLE9BQU1DLElBQUksR0FBSTtRQUNwQyxNQUFNbEMsMERBQU0sQ0FBQ0MsdURBQUcsQ0FBQ0kseUNBQUUsRUFBRSxPQUFPLEVBQUU2QixJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDQSxLQUFLLEVBQUVELElBQUksQ0FBQ0MsS0FBSztZQUNqQkMsSUFBSSxFQUFFRixJQUFJLENBQUNHLFdBQVc7WUFDdEJDLFFBQVEsRUFBRUosSUFBSSxDQUFDSyxRQUFRO1lBQ3ZCQyxhQUFhLEVBQUUsQ0FBQztTQUNuQixDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU1DLGNBQWMsR0FBRyxVQUFZO1FBQy9CLE1BQU1DLFFBQVEsR0FBSSxNQUFNN0MsOERBQWUsQ0FBQ1MsMkNBQUksRUFBRUMsK0NBQVEsQ0FBQztRQUN2RCxNQUFNMkIsSUFBSSxHQUFHUSxRQUFRLENBQUNSLElBQUk7UUFDMUJTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ3RCbEIsY0FBYyxDQUFDa0IsSUFBSSxDQUFDLENBQUM7UUFDckJELGlCQUFpQixDQUFDbEIsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQkFDSSw4REFBQ1AsYUFBYSxDQUFDcUMsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWpDLEtBQUs7WUFBRUYsS0FBSztZQUFFOEIsY0FBYztZQUFFMUIsV0FBVztTQUFFO2tCQUN2RUwsUUFBUTs7Ozs7aUJBQ1ksQ0FDNUI7QUFDTCxDQUFDO0FBR3VDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWFwcC8uL2NvbnRleHQvTWVkaXVtQ29udGV4dC5qcz80MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHNldERvYywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBNZWRpdW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgTWVkaXVtUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICd1c2VycycpKTtcclxuXHJcbiAgICAgICAgICAgIHNldFVzZXJzKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VXNlcnMoKVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdhcnRpY2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIHNldFBvc3RzKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGRvYy5kYXRhKCkuYm9keSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZWY6IGRvYy5kYXRhKCkuYnJpZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkb2MuZGF0YSgpLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TGVuZ3RoOiBkb2MuZGF0YSgpLnBvc3RMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lckltYWdlOiBkb2MuZGF0YSgpLmJhbm5lckltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVkT246IGRvYy5kYXRhKCkucG9zdGVkT24udG9EYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZG9jLmRhdGEoKS5hdXRob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFBvc3RzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGFkZFVzZXJUb0ZpcmViYXNlID0gYXN5bmMgdXNlciA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0RG9jKGRvYyhkYiwgJ3VzZXJzJywgdXNlci5lbWFpbCksIHtcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiB1c2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICBmb2xsb3dlckNvdW50OiAwLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXNlckF1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSAgYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckRhdGEudXNlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyLCAn4pyFJylcclxuICAgICAgICBzZXRDdXJyZW50VXNlcih1c2VyKTtcclxuICAgICAgICBhZGRVc2VyVG9GaXJlYmFzZShjdXJyZW50VXNlcilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZWRpdW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHBvc3RzLCB1c2VycywgaGFuZGxlVXNlckF1dGgsIGN1cnJlbnRVc2VyIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9NZWRpdW1Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgTWVkaXVtQ29udGV4dCwgTWVkaXVtUHJvdmlkZXIgfSJdLCJuYW1lcyI6WyJzaWduSW5XaXRoUG9wdXAiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInNldERvYyIsImRvYyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiTWVkaXVtQ29udGV4dCIsIk1lZGl1bVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VycyIsInNldFVzZXJzIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJnZXRVc2VycyIsInF1ZXJ5U25hcHNob3QiLCJkb2NzIiwibWFwIiwiaWQiLCJkYXRhIiwiZ2V0UG9zdHMiLCJib2R5IiwiYnJpZWYiLCJjYXRlZ29yeSIsInBvc3RMZW5ndGgiLCJiYW5uZXJJbWFnZSIsInRpdGxlIiwicG9zdGVkT24iLCJ0b0RhdGUiLCJhdXRob3IiLCJhZGRVc2VyVG9GaXJlYmFzZSIsInVzZXIiLCJlbWFpbCIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImltYWdlVXJsIiwicGhvdG9VUkwiLCJmb2xsb3dlckNvdW50IiwiaGFuZGxlVXNlckF1dGgiLCJ1c2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/MediumContext.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyASIrpyl-6slleQ9hmyxFLYv-MwcQLC4fQ\",\n    authDomain: \"medium-clone-nextjs-78824.firebaseapp.com\",\n    projectId: \"medium-clone-nextjs-78824\",\n    storageBucket: \"medium-clone-nextjs-78824.appspot.com\",\n    messagingSenderId: \"20199729686\",\n    appId: \"1:20199729686:web:d1118ef7f8de7afd2fe337\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDVjtBQUNOO0FBQ1k7QUFDRjtBQUNqRCw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxNQUFNSSxjQUFjLEdBQUc7SUFDckJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSwyQ0FBMkM7SUFDdkRDLFNBQVMsRUFBRSwyQkFBMkI7SUFDdENDLGFBQWEsRUFBRSx1Q0FBdUM7SUFDdERDLGlCQUFpQixFQUFFLGFBQWE7SUFDaENDLEtBQUssRUFBRSwwQ0FBMEM7Q0FDbEQ7QUFFRCxzQkFBc0I7QUFDdEIsTUFBTUMsR0FBRyxHQUFHWCwyREFBYSxDQUFDSSxjQUFjLENBQUM7QUFDekMsTUFBTVEsSUFBSSxHQUFHWCxzREFBTyxDQUFDVSxHQUFHLENBQUM7QUFDekIsTUFBTUUsUUFBUSxHQUFHLElBQUlYLDZEQUFrQixFQUFFO0FBQ3pDLE1BQU1ZLEVBQUUsR0FBR1gsZ0VBQVksQ0FBQ1EsR0FBRyxDQUFDO0FBRUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpdW0tYXBwLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QVNJcnB5bC02c2xsZVE5aG15eEZMWXYtTXdjUUxDNGZRXCIsXHJcbiAgYXV0aERvbWFpbjogXCJtZWRpdW0tY2xvbmUtbmV4dGpzLTc4ODI0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJtZWRpdW0tY2xvbmUtbmV4dGpzLTc4ODI0XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJtZWRpdW0tY2xvbmUtbmV4dGpzLTc4ODI0LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjAxOTk3Mjk2ODZcIixcclxuICBhcHBJZDogXCIxOjIwMTk5NzI5Njg2OndlYjpkMTExOGVmN2Y4ZGU3YWZkMmZlMzM3XCJcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxuZXhwb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImF1dGgiLCJwcm92aWRlciIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_MediumContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MediumContext */ \"./context/MediumContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__.MediumProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\next JS\\\\medium-app\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\next JS\\\\medium-app\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQzJCO0FBRXpELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCxrRUFBYztrQkFDYiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNiLENBQ2xCO0FBQ0gsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IE1lZGl1bVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9NZWRpdW1Db250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWVkaXVtUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9NZWRpdW1Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIk1lZGl1bVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();