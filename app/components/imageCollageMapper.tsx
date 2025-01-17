/*  imageCollageMapper.tsx
*
*   This component is a way to send a list of logos and rows to the
*   OurPartnerships and MemberCareerPaths components to display a collage of
*   logos in a systematic way.
* 
*   Created by: Holden Kittelberger
*   Date: 1/16/25
*/

/* defining of what the Logo array contains*/
type Logo = {
  src: string;
  alt: string;
};

/* Parameters being passed into this component */
type Props = {
  logos: Logo[];
  rows: Logo[][];
};

/* the component that takes in the logos and rows and maps them into a 
   collage 
*/
const imageCollageMapper: React.FC<Props> = ({ logos, rows }) => {
  return (
    <div className="flex flex-col sm:gap-4 px-20">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-between gap-[2%] w-full"
        >
          {row.map((logo, logoIndex) => {
            if (logoIndex === 0 || logoIndex === row.length - 1) {
              return (
                <div
                  key={logoIndex}
                  className="hidden sm:flex flex-auto p-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain h-16 sm:h-20"
                  />
                </div>
              );
            }
            return (
              <div
                key={logoIndex}
                className="flex-auto p-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain h-16 sm:h-20"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default imageCollageMapper;