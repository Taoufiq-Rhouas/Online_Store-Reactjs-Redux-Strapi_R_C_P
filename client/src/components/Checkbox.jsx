import './Checkbox.css'

export default function Checkbox({category}) {
    return (
        <>
            <div className='content_check_and_title'>
                {/* <!-- Toggle Button Style 1 --> */}
                <label className="toggler-wrapper style-1">
                    <input type="checkbox" />
                    <div className="toggler-slider">
                        <div className="toggler-knob"></div>
                    </div>    
                </label>
                {/* <!-- End Toggle Button Style 1 --> */}
                <div className="badge">{category.attributes.title}</div>
            </div>
        </>
    )
}
