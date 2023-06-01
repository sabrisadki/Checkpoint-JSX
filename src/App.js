import 'bootstrap/dist/css/bootstrap.min.css';
import MyFirstComponent from './MyFirstComponent';
import React from "react";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Card from "react-bootstrap/Card";
const firstName = "Sabri";


const App = () => (
    <React.Fragment>

    <div>
      {firstName ? (
        <div>
          <Card style={{ width: "18rem" }}>
            <Image product={product} />
            <Card.Body>
              <Name product={product} />
              <Price product={product} />
              <Description product={product} />
            </Card.Body>
          </Card>
          <p>Hello, {firstName}!</p>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHIAmAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD0QAAEDAgQEBAMGAwcFAAAAAAEAAgMEEQUSITETQVFhBiJxgRQykQdCobHB0SNS4TM0YmODkvAVF1Nygv/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMFBgT/xAAnEQACAgICAgEEAgMAAAAAAAAAAQIDERITIQQxIgVBUVIUQjJxkf/aAAwDAQACEQMRAD8AZ9ORuFDh2GyMIJ5lRLFo7HLOIJkS4YRfDS4aORdAThpcNF8MJ+GjsDjAuF2UhF2ReRLL2U2BxgwhHRLggGxsPUrJqcSnGJPhMzY6USCPMxhcRte+nX8kXiWJ0tBJG2NnFozcOlda8hHMXIPt7ryT82MZ6o1qfos7KuRvH4C+D2TiEKNDX0tbI+KB1pI/mYdx37o7IvXGaksoybfHdc3GS7QIImjkpcMWRQjT8I9E2xVoCiJIw3RnCd/KVIQP/lKmwvGBcFPwuyM4DuYKcQI7C8QGIb8kkeIkkdheJFeRLIi+H2SEJPIfVebJragmRIxo9lKCfM9rfdENoqfnMhsgqpsyBF0UuAbarYFHRjeV5T/D0LdQSfUqbjKhmHwwE/DvyWyTSs+WMH1UXVMY2jaPRTcHEl7Zbhk7PhI6WGjls9pzyZQAXA2N/wBzuNl5ti3h+oqMaqsMppIWta0PDuHZtiL6gX1/D8l6bQ13DZPNJn4YABc4jK3sNFx1RUzYljFS3DHv4ZgeJJGgaaG2ttNbDTqucc5Ruk/9ncePXGzx4pesI5z7Oqdz310r26XYy411F72P0Xfxxxc2OWL4MpmxYMIoQXPY58kvlIIzPIHtpb2W6Mx22XQ1STisM4ry4NXSyibWwD7h+qtDohswKoNKfKVYebOCZLO30UCG8nJwxSEaIjbZWGA/fTFo63V3D7KQj7JsiNNg2S/K6SKEaSmwnGyPBd0SMXZGFhduomMry7Gw6wThpcNFcNLh9kdhXAELOiiY0YY1EsR2A4AfDTCIkgAanYBWyyxMcWCSEy2zZHSBpt19PZNUYrR4V55nh5IsbDVr77a+mnWxVNnkRiuu2euj6fZa1lYQJjlHIyjpoHU7ppaqpETIS9waNLlzgDrYDbsi8GjpcN8Nvc8RxMia74h7QdSNz9NvZEYfVwYvPQVURDrmV2YbANs0+9nfij6+GhqCYarzwZBmiaCWuN+dllXS5XmXR0Xj18MVCJmeB4SaaSsniLZag3ayxHDbyZ66a/iqPE05w6SOcyR5XSNBjazkTY2PX9lp1dbC2JsNK80oDcjXllmtHQfpt+i898UVbKmu4UbpQGAXzuJIPuraJd5iyvyYJwamvZ27WXHZTEahhkgqaGnn/wDJG13vZGtYtjbo5B1YeAcRp+GihGpcPspsTjBRGn4aJ4akI+ymwOMG4aSLEaSmweIu+Bd1/BQdSOBsC0o3P3SLmlePY23VEBNJJ0H1VboHt1LbI85OYBStEdwjsK6UZpiJSZC0OBktlvr3Wg6KK17fihKiJrpIWD5HO1F+xSW2Yg2PTQnYsmLi2D4BXPL6l7Iy35pBOWEH1vp6LmqzDMKf4kw9oNdWUE0UjXPa57mcW4IzEb6Zl0fiSSnno5aGV0bIHh0MgLgAwEeU9vMG/wC5cVgniSowcRQZDNQlou0uJI6lpO3pseyzKGpPtm7bXPTMVlo9ApH4Nh7WwQwtjytc5rOEdASLkC3W11Y7GqAFzGODngXMYaS76brBxqrhr8AdjGFS3qKPzxuBs5t7ZmuHccueiNwOufW+H46+WFrJX5s4aLXIJb+gQ8irjWU8oXxrOTqSwznPEOOvxky0GHQOa4EXLrN099Vi+JMIr6GGirKqVsrZY2smLdMsg/S1voUM7Eqqkxt1RFIBMC7KHgOABJ0IKjiGN4jizGtrpczIySGBoAv7K+mDilgHkzi+meneF25sCoT/AJIWwI1k+CC2bw1RFhvla5pvyIcdF0AjWmpdHOTq+bKWxqfDCuEalkR2E4igRhOIwiAxPkU2DxFAjCdEBiSmwOM5GDEK6Quy1DTl3uGm3sFF+NVsTg15bbm4sFllspRE4S55NDs11gpzPI1yO9VzfPZ+TtX41X6o1f8Arc7nDLJRnscwP5qE3iQwX4jIjb+RxKzYC8XLGWB3Fk1S0yxlkhDWncMvdMvKsX3Efh0v+prM8QlzQ407RfW3E1PsisLxT4+py8BzMjS65IOv/CuWZDC1xLSS46XIR3hyaOLHIom2u9rgbN02/on/AJNkvi2JLw6oraK7RR9oUTnYW9zCWucLPsdSDyK87wqrDY3U1S27DsebT1Xf/aQ92SnhjPnkfw7drrlPEGCR0bqappZGlkzbSNFzkeNz013snqcVHV/cdKTcZROhwqnAwZpp3gOlDoZCBo9rtAHDpuOq6+tc2lwhrdG327Li/Bk0ktTHQxi8T9wdbW1v9fzWp4+xR7Z46ClGaR1mNaOZ2VHyk2mW2wUZr/pwGIyCXE5JBzc4k+6hUtDZYiNOK3S3Uf0/JVyU8zK19NM0tla4teOgRNUM9MP8Dg4drLQU1FpHldDnXN/c9Y+zUgeFYCQNZZOX+Jda1w6BeK4f40mwyjZRxxP/AIIsC2TKDrfb3V7ftFxRu0cf/wBa/orlOf6mTKqD72R7Hm15JEXK8h/7kYvyZSj1Yf3V8X2l4m0eelo3+zh+qsUit1HrAbrsrBGzmCvL6b7SMTnIEWERTH/Lc/8AqtWHxzihH8Xw5KP/AFqR+oCjtivbIqJv0juyxvK6ZcpH4xl04uBV3+nLC783hJDnh+Rv4tn6mRLTQsYLEg8iNEO2KZp0lcW9TYgepR1WGvbY6dUEx73FsLL6nzHoFzuTqCMrapsZfEGyjodLocVcwsJYHM63H7LWmdwYQ1jCbaNAUPhS+BzZDq/RzhyHQKZ/JAOKYSaBhPoFbS1bKeup85yO4rdDudVKsljoIGx00ZLz5WtaLm/K6y8OwyR1fFiFY8+STNwrEEkai9+V+iaOG8voku0Q8ZVTH+KaOCR3kjfn09D+ymRT1rXR+UtIuWkHZDeKo6iur6asbHG10PzAHVw6qvDBPUS8OFjm3OV0z22bH3PX0G6tmtknEWr4J7G54SoabDpa7ERIeFE3IM2wdu6x6DT8UFgQZiWNT4rUsJaXFlMS3y6bu9eQ91T4ir6SXCI8NwmbLBHM2F5O5HM9+t+aIbiVPRRx0lMx0swYBHTx2uByJOwHcoWOcVhexI4m3Jmd4wpclRLVUlOIosoEk7y1uY9G31+m/suLfXlsTmsBcSLDou/moPincfFSKiU3DIR/ZRX6D7x7lAHw7Szf3UND2nzNcwH9ldRfCKxMW2FzWIPBw9LTz1MrWRskklds1upK6uDwVWZGOqauKHML5cpcW+uw/FdVhVE2hYeHDAH7ZmMtdX1FUxkrG1t2ZtGlh0Rs86cn8Ojz1/ToR/y7OSPhB0ZBdXiRo1dkjyu9ruXQYZhOGQNBgp28TmZ25nD6rVgaw7PcRy2Vho2G9tDy2Xmn5Nk1hs9MfHqg+kM2OwADGEdh+id0XkytbltzvYod3Fhly3ztHK+6se4OG7vqqcl2B2ReWz8ubqNykhnNdn0LreuySbJNQmXJM0tzaEW0VbKVsUZET3NNtDuUhSsHyue30KXCmafJKCOQcEuQ4Ko21jZLPAe3+YGy0BlazzG57KqN7xlzAXG5B3TOkBPzG9+moStkxkU784a06hurb/d9FTK8lvl221Se4tdmzXBOgVUvmaQ473O6UZJIArYnyw2bIY5M7A12W4aLjN722Ttq6tlCKUx0+UXLX2Nxe+p6n81Kqe7S+unJDsvOSxoueZ5NCvhNpCyrUvZzMmDQxVIkmmkmJu4i5YL8hpqunwmlij8romsOuY2tnJVTKF0U2b+1O4J5eyPjqCNHMIKsttlNexK6ow9IetBLf4LtWm+U7OUsOljiDnPs2R+jx2HJWtu77hUsgsM7LeoVGesFoS2WI/KR2CorKVlYW53+UDQWv7pvho3cvoqpIJIjmhce7TqFEAI+H4Z/h6e9lBxljJNy63dKCpJGWRpBHui2lr2gggqAM1laJnOPQ2V7XXAdyOyJZR07ZTKII87tyW3uetuvdRdStHylwHQHRF4+xEysOvYAXKdMYXM1D3JIEyWOJ6pO5pJJQjP+YKJ+Ye6SSDCRkJs3XmqJf3SSUQwBW7FLDP7vfq91++qdJW/0AXTE5iLm39EO0m41SSSIJoQI6HV1jsb6JJJGBlDTZxA6lWO2KSSZisGl3PqFEEtrHgEjQbJJJ0A0Yicu/NIk9U6SQhApJJIoh//Z" alt="Profile" />
        </div>
      ) : (
        <p>Hello, there!</p>
      )}
    </div>


      <MyFirstComponent/>

          {
              [1, 2, 3].map(currentValue => (<div>{currentValue}</div>))
          }

    </React.Fragment>
  );


export default App;
