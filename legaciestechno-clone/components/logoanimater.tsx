// export function LogoAnimater() {
//   return (
//     <div className="items-center w-60 h-40 flex justify-start  border border-yellow-400 object-cover lg:pr-">
//       <img
//         src="/logoelements/Untitled (40).png"
//         alt=""
//         className="w-[130px] h-[100px] animate-bracket-left object-contain grayscale-100"
//       />

//       <p className="text-[25px] font-black   animate-dot1">.</p>
//       <p className="text-[25px] font-black ml-1 animate-dot2">.</p>
//       <p className="text-[25px] font-black ml-1 animate-dot2">/</p>
//       <img
//         src="/logoelements/Untitled (41).png"
//         alt=""
//         className="w-[130px] h-[100px] animate-bracket-right"
//       />
//     </div>
//   );
// }

export function LogoAnimater() {
  return (
    <div className="-translate-x-12 items-center w-60 h-40 flex justify-start   object-cover">
      <img
        src="/logoelements/Untitled (40).png"
        alt=""
        className="w-[130px] h-[100px] animate-bracket-left object-contain grayscale-100"
      />

      <p className="text-[25px] font-black animate-dot1">.</p>
      <p className="text-[25px] font-black ml-1 animate-dot2">.</p>
      <p className="text-[25px] font-black ml-1 animate-dot2">/</p>

      <img
        src="/logoelements/Untitled (41).png"
        alt=""
        className="w-[130px] h-[100px] animate-bracket-right"
      />
    </div>
  );
}
