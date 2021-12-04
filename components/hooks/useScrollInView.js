import { useRef, useState, useLayoutEffect } from 'react'
// import { useInView } from "react-intersection-observer";

// export function useScrollInView() {
//   const [start, setStart] = useState(null);
//   const [end, setEnd] = useState(null);

//   const { ref, inView, entry } = useInView({
//     triggerOnce: false
//   });

//   useEffect(() => {
//     if (inView) {
//       const rect = entry.boundingClientRect;
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const offsetTop = rect.top + scrollTop;
//       setStart(offsetTop / document.body.clientHeight);
//       setEnd((offsetTop + rect.height) / document.body.clientHeight);
//     }
//   });

//   return { ref, start, end };
// }

export default function useScrollInView(inputRef) {
  const ref = inputRef || useRef();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    setStart(offsetTop / document.body.clientHeight);
    setEnd((offsetTop + rect.height) / document.body.clientHeight);
  });
  return { ref, start, end };
}