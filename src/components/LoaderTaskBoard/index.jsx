import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoaderTaskBoard() {
  return (
    <div className="w-full gap-2 justify-between xl:flex overflow-y-auto">
      <div className="bg-white p-3 rounded-md overflow-hidden min-h-[48px] flex-1 mb-2">
        <div className="mb-4">
          <Skeleton height={40} />
        </div>
        <ul className="w-full h-full overflow-y-auto pb-2 xl:pb-6 fancy-scrollbar pr-2">
          <li>
            <div className=" max-w-md w-11/12 min-w-[240px] border rounded-lg p-4 shadow-md mb-4 mx-auto">
              <Skeleton height={30} />
              <Skeleton width={100} />
              <div>
                <Skeleton width={120} />
              </div>
              <Skeleton height={100} />
            </div>
          </li>
          <li>
            <div className=" max-w-md w-11/12 min-w-[240px] border rounded-lg p-4 shadow-md mb-4 mx-auto">
              <Skeleton height={30} />
              <Skeleton width={100} />
              <div>
                <Skeleton width={120} />
              </div>
              <Skeleton height={100} />
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white p-3 rounded-md overflow-hidden min-h-[48px] flex-1 mb-2">
        <div className="mb-4">
          <Skeleton height={40} />
        </div>
        <ul className="w-full h-full overflow-y-auto pb-2 xl:pb-6 fancy-scrollbar pr-2">
          <li>
            <div className=" max-w-md w-11/12 min-w-[240px] border rounded-lg p-4 shadow-md mb-4 mx-auto">
              <Skeleton height={30} />
              <Skeleton width={100} />
              <div>
                <Skeleton width={120} />
              </div>
              <Skeleton height={100} />
            </div>
          </li>
          <li>
            <div className=" max-w-md w-11/12 min-w-[240px] border rounded-lg p-4 shadow-md mb-4 mx-auto">
              <Skeleton height={30} />
              <Skeleton width={100} />
              <div>
                <Skeleton width={120} />
              </div>
              <Skeleton height={100} />
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white p-3 rounded-md overflow-hidden min-h-[48px] flex-1 mb-2">
        <div className="mb-4">
          <Skeleton height={40} />
        </div>
        <ul className="w-full h-full overflow-y-auto pb-2 xl:pb-6 fancy-scrollbar pr-2">
          <li>
            <div className=" max-w-md w-11/12 min-w-[240px] border rounded-lg p-4 shadow-md mb-4 mx-auto">
              <Skeleton height={30} />
              <Skeleton width={100} />
              <div>
                <Skeleton width={120} />
              </div>
              <Skeleton height={100} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
