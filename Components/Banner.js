import Link from 'next/link';

export default function Banner() {
    return (
        <div>
            <hr className="dropdown-divider bg-dark" />
            <div>
                <div>
                    <div className="bg-dark">
                        <nav className="nav d-flex justify-content-between"><Link href="/Blog/World"><a className="p-2 link-secondary">World</a></Link> <Link href="/Blog/U.S."><a className="p-2 link-secondary">U.S.</a></Link> <Link
                            href="/Blog/Technology"><a className="p-2 link-secondary">Technology</a></Link> <Link href="/Blog/Design"><a className="p-2 link-secondary">Design</a></Link> <Link
                                href="/Blog/Culture"><a className="p-2 link-secondary">Culture</a></Link> <Link href="/Blog/Business"><a className="p-2 link-secondary">Business</a></Link> <Link href="/Blog/Politics"><a className="p-2 link-secondary">Politics</a></Link> <Link href="/Blog/Opinion"><a className="p-2 link-secondary">Opinion</a></Link> <Link href="/Blog/Science"><a className="p-2 link-secondary">Science</a></Link> <Link href="/Blog/Health"><a className="p-2 link-secondary">Health</a></Link> <Link
                                    href="/Blog/Lifestyle"><a className="p-2 link-secondary">Style</a></Link> <Link href="/Blog/Travel"><a className="p-2 link-secondary">Travel</a></Link></nav>
                    </div>
                </div>
            </div>

        </div>
    );
}