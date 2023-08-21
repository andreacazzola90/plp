import { Fragment, ReactNode } from 'react';


export async function Breadcrumbs({ children }: { children: any }) {

    const childrenArray = Array(children);

    console.log(children);

    const childrenWtihSeperator = childrenArray.map((child: ReactNode, index: number) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    <span>/</span>
                </Fragment>
            );
        }
        return child
    });

    return (
        <nav className="mx-8 md:mx-16 lg:mx-32 mt-8">
            <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
        </nav>
    );

}
